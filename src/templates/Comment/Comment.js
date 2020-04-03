import React from "react";
import PropTypes from "prop-types";
import style from "./Comment.scss";
import classNames from "../../helpers/classNames";
import { Avatar } from "../../components/Avatar";
import { Type } from "../../components/Type";

const Comment = ({ comment = {}, createdBy = {} }) => (
  <div className={style.comment} data-testid="comment">
    <Avatar src={createdBy.avatarURL} size="small" />
    <div className={style.content}>
      <Type color="grey" caption setSize="0.7rem">
        {createdBy.name} • 1hr
      </Type>
      <Type tag="div">{comment.content}</Type>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object,
  createdBy: PropTypes.object
};

export { Comment };
