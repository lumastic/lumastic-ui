import PropTypes from "prop-types";
import React from "react";
import { PressRenderer } from "pressdk";
import { Avatar, Link, Type, Tooltip, ProStamp } from "../../components";
import formatTime from "../../helpers/formatTime";
import style from "./Comment.scss";
import { parseContent } from "../../helpers";
import { Mention, pressComponents } from "../../PressHelpers";
import { profileRoute } from "../../routes";

const Comment = ({ comment = {}, createdBy = {} }) => (
  <div className={style.comment} data-testid="comment">
    <Link to={profileRoute(createdBy.username)} inline>
      <Tooltip position="top" label={createdBy.name}>
        <Avatar src={createdBy.avatarURL} size="small" />
      </Tooltip>
    </Link>
    <div className={style.content}>
      <Link to={profileRoute(createdBy.username)} inline>
        <Type color="grey" caption setSize="0.7rem">
          {createdBy.name} {createdBy?.userProfile?.isLicensed && <ProStamp />}{" "}
          •{" "}
          <Tooltip
            postition="top"
            label={formatTime({ time: comment.createdAt, fullDate: true })}
          >
            {formatTime({ time: comment.createdAt })}
          </Tooltip>
        </Type>
      </Link>
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
