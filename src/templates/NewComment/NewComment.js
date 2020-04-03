import React from "react";
import PropTypes from "prop-types";
import style from "./NewComment.scss";
import classNames from "../../helpers/classNames";
import { TextInput } from "../../components/TextInput";
import { Avatar } from "../../components/Avatar";

const NewComment = ({ post = {}, user = {} }) => (
  <div className={style.newcomment}>
    <Avatar src={user.avatarURL} size="small" className={style.avatar} />
    <TextInput placeholder="Post a comment..." />
  </div>
);

NewComment.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export { NewComment };
