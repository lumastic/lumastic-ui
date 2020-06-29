import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Type } from "../../components/Type";
import { Tooltip } from "../../components/Tooltip";
import formatTime from "../../helpers/formatTime";
import style from "./Comment.scss";

const Comment = ({ comment = {}, createdBy = {} }) => (
  <div className={style.comment} data-testid="comment">
    <Tooltip position="top" label={createdBy.name}>
      <Avatar src={createdBy.avatarURL} size="small" />
    </Tooltip>
    <div className={style.content}>
      <Type color="grey" caption setSize="0.7rem">
        {createdBy.name} • {formatTime({ time: comment.createdAt })}
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
