import PropTypes from "prop-types";
import React from "react";
import {
  Avatar,
  Form,
  IconButton,
  PressInput,
  TextInput
} from "../../components";
import classNames from "../../helpers/classNames";
import { useReset, useUser } from "../../hooks";
import { PaperAirplane } from "../../icons";
import style from "./CommentForm.scss";
import { findMentions } from "../../helpers";

const CommentForm = ({ className, onSubmit, defaultValues }) => {
  const { avatarURL } = useUser();
  const [reset, toggle] = useReset();
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
      className={classNames(className, style.newcomment)}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
    >
      <Avatar src={avatarURL} size="small" className={style.avatar} />
      <PressInput
        reset={reset}
        className={style.input}
        name="content"
        placeholder="Reply..."
      />
      <TextInput name="progressUpdateId" hidden />
      <IconButton size="big" type="submit" className={style.button}>
        <PaperAirplane />
      </IconButton>
    </Form>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object
};

export { CommentForm };
