import React from "react";
import PropTypes from "prop-types";
import style from "./NewComment.scss";
import classNames from "../../helpers/classNames";
import { TextInput } from "../../components/TextInput";
import { Avatar } from "../../components/Avatar";
import useCurrentUser from "../../hooks/useCurrentUser";
import { Form } from "../../components/Form";
import { IconButton } from "../../components/IconButton";
import { PaperAirplane } from "../../icons/PaperAirplane";

const NewComment = ({ createComment }) => {
  const { currentUser } = useCurrentUser();
  return (
    <Form className={style.newcomment}>
      <Avatar
        src={currentUser.avatarURL}
        size="small"
        className={style.avatar}
      />
      <TextInput name="comment" placeholder="Post a comment..." />
      <IconButton size="big" type="submit">
        <PaperAirplane />
      </IconButton>
    </Form>
  );
};

NewComment.propTypes = {
  createComment: PropTypes.func
};

export { NewComment };
