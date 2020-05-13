import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Type } from "../../components/Type";
import { Point } from "../../components/Point";
import { Comment } from "../../templates/Comment";
import { NewComment } from "../../templates/NewComment";
import { Reaction } from "../../templates/Reaction";
import { AddEmoji } from "../../templates/AddEmoji";
import { SparkCrumbs } from "../../templates/SparkCrumbs";
import recommendReactions from "./helpers/recommendReactions.json";
import formatTime from "../../helpers/formatTime";
import style from "./ProgressPost.scss";

const ProgressPost = ({
  spark = {},
  post = {},
  canComment = false,
  reactionClick,
  reactionSelect,
  createComment
}) => (
  <div className={style.postcontainer} data-testid="progresspost">
    <Point className={style.point} withBorder />
    <Card className={style.progresspost}>
      <div className={style.postheader}>
        <SparkCrumbs
          spark={spark}
          organization={post.createdBy}
          className={style.crumbs}
          small
        />
        <Type color="grey" className={style.time} tag="div" setSize="0.7rem">
          {formatTime({ time: post.createdAt })}
        </Type>
      </div>
      <Type tag="div">{post.content}</Type>
      <div className={style.postreactions}>
        {post.reactions?.map((reaction, key) => (
          <Reaction
            reaction={reaction}
            onClick={reactionClick}
            canReact={canComment}
            key={reaction.id || key}
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
        <div className={style.comments}>
          {canComment && (
            <NewComment post={post} createComment={createComment} />
          )}
          {post.comments?.map((comment, key) => (
            <Comment
              comment={comment}
              createdBy={comment.createdBy}
              key={comment.id || key}
            />
          ))}
        </div>
      )}
    </Card>
  </div>
);

ProgressPost.propTypes = {
  spark: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  canComment: PropTypes.bool,
  reactionClick: PropTypes.func,
  reactionSelect: PropTypes.func,
  createComment: PropTypes.func
};

export { ProgressPost };
