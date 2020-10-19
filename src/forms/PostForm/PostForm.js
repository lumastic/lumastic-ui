import { defaultPressValue } from "pressdk";
import PropTypes from "prop-types";
import React, { useState } from "react";
import * as yup from "yup";
import { useUser } from "../..";
import {
  Button,
  Form,
  Link,
  Option,
  PressInput,
  Select,
  TextInput,
  Type
} from "../../components";
import { findMentions, parseContent } from "../../helpers";
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
  const [progressBoards, setProgressBoards] = useState([]);
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
        spark: sparks.length === 1 && sparks[0]?.id,
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
          onChange={sparkId =>
            setProgressBoards(
              sparks.find(spark => spark?.id === sparkId)?.progressBoards
            )
          }
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
          <Select name="progressBoardId" small placeholder="Share with...">
            {progressBoards?.map((board, key) => (
              <Option name={board?.id} key={board?.id || key}>
                <Type body2>{board?.id}</Type>
              </Option>
            ))}
          </Select>
        </div>
        <div className={style.right}>
          <Button type="submit" variant="contained" {...buttonProps}>
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
