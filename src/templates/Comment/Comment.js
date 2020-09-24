import PropTypes from "prop-types";
import React from "react";
import { PressRenderer } from "pressdk";
import { Avatar } from "../../components/Avatar";
import { Type } from "../../components/Type";
import { Tooltip } from "../../components/Tooltip";

import formatTime from "../../helpers/formatTime";
import style from "./Comment.scss";
import { parseContent } from "../../helpers";
import { Mention, pressComponents } from "../../PressHelpers";

const Comment = ({ comment = {}, createdBy = {} }) => (
  <div className={style.comment} data-testid="comment">
    <Tooltip position="top" label={createdBy.name}>
      <Avatar src={createdBy.avatarURL} size="small" />
    </Tooltip>
    <div className={style.content}>
      <Type color="grey" caption setSize="0.7rem">
        {createdBy.name} •{" "}
        <Tooltip
          postition="top"
          label={formatTime({ time: comment.createdAt, fullDate: true })}
        >
          {formatTime({ time: comment.createdAt })}
        </Tooltip>
      </Type>
      <Type tag="div">
        <PressRenderer
          components={pressComponents}
          value={parseContent(comment?.content)}
          renderMention={Mention}
        />
      </Type>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object,
  createdBy: PropTypes.object
};

export { Comment };
