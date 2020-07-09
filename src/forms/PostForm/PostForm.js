import { defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import { useUser } from "../..";
import {
  Button,
  Form,
  Link,
  Option,
  Point,
  PressInput,
  Select,
  TextInput,
  Type
} from "../../components";
import { PaperAirplane } from "../../icons";
import { createSparkRoute } from "../../routes";
import { Signature, SparkCrumbs, SparkSelectCrumbs } from "../../templates";
import style from "./PostForm.scss";
import { parseContent } from "../../helpers";
import { useReset } from "../../hooks";

const postSchema = yup.object().shape({
  content: yup.string().required("This field is required"),
  spark: yup.string().required("This field is required"),
  type: yup.string().required("This field is required")
});

const PostForm = ({
  onSubmit,
  sparks = [],
  defaultValues = {},
  buttonLabel = "Post"
}) => {
  const user = useUser();
  const [reset, toggle] = useReset();
  if (sparks.length === 0)
    return (
      <>
        <Link to={createSparkRoute}>
          <Type align="center" color="primary">
            Create a spark to join the conversation
          </Type>
        </Link>
      </>
    );
  const handleSubmit = async (data, e, rest) => {
    if (onSubmit) {
      await onSubmit(data, e, rest);
    } else {
      alert(JSON.stringify(data));
    }
    toggle();
  };
  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        content: JSON.stringify(defaultPressValue()),
        spark: sparks[0].id,
        ...defaultValues
      }}
      className={style.form}
      validationSchema={postSchema}
    >
      {sparks.length > 1 && (
        <SparkSelectCrumbs
          small
          name="spark"
          organization={user}
          sparks={sparks}
        />
      )}
      {sparks.length === 1 && (
        <>
          <SparkCrumbs small spark={sparks[0]} organization={user} />
          <TextInput name="spark" hidden />
        </>
      )}

      <PressInput
        defaultValue={parseContent(defaultValues?.content)}
        reset={reset}
        name="content"
        placeholder="What's the latest..."
      />
      <div className={style.bottom}>
        <div className={style.left}>
          <Select
            name="type"
            small
            placeholder="Select a spark..."
            defaultValue="progress"
          >
            <Option name="progress">
              <Signature>
                <Point />
                <Type body2>Share progress</Type>
              </Signature>
            </Option>
            <Option name="issue">
              <Signature>
                <Point color="red" />
                <Type body2>Ask for help</Type>
              </Signature>
            </Option>
            <Option name="resolved">
              <Signature>
                <Point color="green" />
                <Type body2>Mark as solved</Type>
              </Signature>
            </Option>
          </Select>
        </div>
        <div className={style.right}>
          <Button type="submit">
            <PaperAirplane />
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Form>
  );
};

PostForm.propTypes = {
  sparks: PropTypes.array,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
  buttonLabel: PropTypes.string
};

export { PostForm };
