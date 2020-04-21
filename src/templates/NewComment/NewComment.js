import React from "react";
import PropTypes from "prop-types";
import style from "./NewComment.scss";
import classNames from "../../helpers/classNames";
import { TextInput } from "../../components/TextInput";
import { Avatar } from "../../components/Avatar";
import useCurrentUser from "../../hooks/useCurrentUser";

const NewComment = ({ createComment }) => {
  const { currentUser } = useCurrentUser();
  return (
    <div className={style.newcomment}>
      <Avatar
        src={currentUser.avatarURL}
        size="small"
        className={style.avatar}
      />
      <TextInput placeholder="Post a comment..." />
    </div>
  );
};

NewComment.propTypes = {
  createComment: PropTypes.func
};

export { NewComment };
