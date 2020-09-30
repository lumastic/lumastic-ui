import { defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";
import { useUser } from "../..";
import {
  Button,
  Form,
  Link,
  PressInput,
  TextInput,
  Type
} from "../../components";
import { parseContent, findMentions } from "../../helpers";
import { useReset } from "../../hooks";
import { PaperAirplane } from "../../icons";
import { createSparkRoute } from "../../routes";
import { SparkCrumbs, SparkSelectCrumbs } from "../../templates";
import style from "./PostForm.scss";

const postSchema = yup.object().shape({
  content: yup.string().required("This field is required"),
  spark: yup.string().required("This field is required")
});

const PostForm = ({
  onSubmit,
  sparks = [],
  defaultValues = {},
  buttonLabel = "Post",
  buttonProps = {}
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
    const object = JSON.parse(data?.content);
    const mentions = findMentions(object);
    data.mentions = mentions;
    const { reset: formReset } = rest;
    rest.reset = () => {
      formReset();
      toggle();
    };
    if (onSubmit) {
      await onSubmit(data, e, rest);
    } else {
      alert(JSON.stringify(data));
    }
  };
  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        content: JSON.stringify(defaultPressValue()),
        spark: sparks[0]?.id,
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
        placeholder="What's on your mind..."
      />
      <div className={style.bottom}>
        <div className={style.left}>
          {/* <Select
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
          </Select> */}
        </div>
        <div className={style.right}>
          <Button type="submit" {...buttonProps}>
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
  buttonProps: PropTypes.object,
  buttonLabel: PropTypes.string
};

export { PostForm };
