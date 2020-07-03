import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "../../components/TextInput";
import { Avatar } from "../../components/Avatar";
import { Form } from "../../components/Form";
import { IconButton } from "../../components/IconButton";
import { PaperAirplane } from "../../icons/PaperAirplane";
import { useUser } from "../..";
import style from "./NewComment.scss";
import classNames from "../../helpers/classNames";

const NewComment = ({ post = {}, onSubmit }) => {
  const { avatarURL } = useUser();
  return (
    <Form
      className={style.newcomment}
      onSubmit={onSubmit}
      defaultValues={{ progressUpdateId: post?.id }}
    >
      <Avatar src={avatarURL} size="small" className={style.avatar} />
      <TextInput name="content" placeholder="Post a comment..." />
      <TextInput name="progressUpdateId" hidden />
      <IconButton size="big" type="submit">
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
