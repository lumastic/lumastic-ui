import React from "react";
import PropTypes from "prop-types";
import {
  TextInput,
  Avatar,
  Form,
  IconButton,
  PressInput
} from "../../components";

import { PaperAirplane } from "../../icons/PaperAirplane";
import { useUser } from "../..";

import useModal from "../../hooks/useModal";
import style from "./NewComment.scss";
import classNames from "../../helpers/classNames";

const NewComment = ({ post = {}, onSubmit }) => {
  const { avatarURL } = useUser();
  const [reset, toggle] = useModal();
  const handleSubmit = (data, e, rest) => {
    if (onSubmit) {
      onSubmit(data, e, rest);
    } else {
      alert(JSON.stringify(data));
    }
    toggle();
  };
  return (
    <Form
      className={style.newcomment}
      onSubmit={handleSubmit}
      defaultValues={{ progressUpdateId: post?.id }}
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

NewComment.propTypes = {
  onSubmit: PropTypes.func,
  post: PropTypes.object
};

export { NewComment };
