import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Type } from "../../components/Type";
import { Point } from "../../components/Point";
import { Comments } from "../../templates/Comments";
import { Reaction } from "../../templates/Reaction";
import { AddEmoji } from "../../templates/AddEmoji";
import recommendReactions from "./helpers/recommendReactions.json";
import { SparkCrumbs } from "../../templates/SparkCrumbs";
import style from "./ProgressPost.scss";
import formatTime from "../../helpers/formatTime";

const ProgressPost = ({
  spark = {},
  post = {},
  canComment = false,
  reactionClick,
  reactionSelect
}) => (
  <div className={style.postcontainer} data-testid="progresspost">
    <Point className={style.point} withBorder />
    <Card className={style.progresspost}>
      <div className={style.postheader}>
        <SparkCrumbs
          spark={spark}
          avatarURL={post.createdBy.avatarURL}
          className={style.crumbs}
          small
        />
        <Type color="grey" className={style.time} tag="div" setSize="0.7rem">
          {formatTime({ time: post.createAt })}
        </Type>
      </div>
      <Type tag="div">{post.content}</Type>
      <div className={style.postreactions}>
        {post.reactions.map(reaction => (
          <Reaction
            reaction={reaction}
            onClick={reactionClick}
            canReact={canComment}
          />
        ))}
        {canComment ? (
          <AddEmoji
            recommended={recommendReactions}
            onSelect={reactionSelect}
          />
        ) : null}
      </div>
      {(post.comments || canComment) && <Divider />}
      {(post.comments || canComment) && (
        <Comments comments={post.comments} canComment={canComment} />
      )}
    </Card>
  </div>
);

ProgressPost.propTypes = {
  spark: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  canComment: PropTypes.bool,
  reactionClick: PropTypes.func,
  reactionSelect: PropTypes.func
};

export { ProgressPost };
