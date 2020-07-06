import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Avatar,
  PressInput,
  TextInput,
  IconButton
} from "../../components";
import { useUser } from "../../hooks";
import useModal from "../../hooks/useModal";
import { PaperAirplane } from "../../icons";
import style from "./CommentForm.scss";
import classNames from "../../helpers/classNames";

const CommentForm = ({ className, onSubmit, defaultValues }) => {
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
