import PropTypes from "prop-types";
import React from "react";
import { PressRenderer } from "pressdk";
import { Card, Divider, Type, Point, MenuItem } from "../../components";
import {
  Comment,
  Reaction,
  AddEmoji,
  SparkCrumbs,
  MoreMenu
} from "../../templates";
import recommendReactions from "./helpers/recommendReactions.json";
import formatTime from "../../helpers/formatTime";
import { parseContent } from "../../helpers";
import { pressComponents } from "../../PressHelpers";
import { CommentForm } from "../../forms";
import style from "./ProgressPost.scss";
import { useUser } from "../../hooks";

const ProgressPost = ({
  spark = {},
  post = {},
  canComment = false,
  reactionClick,
  reactionSelect,
  newCommentHandler
}) => {
  const { id } = useUser();
  const isAuthor = post?.createdBy?.id === id;
  return (
    <div className={style.postcontainer} data-testid="progresspost">
      <Point className={style.point} withBorder />
      <Card className={style.progresspost}>
        <div className={style.postheader}>
          <SparkCrumbs
            spark={spark}
            user={post.createdBy}
            className={style.crumbs}
            small
          />
          <Type color="grey" className={style.time} tag="div" setSize="0.7rem">
            {formatTime({ time: post.createdAt || post.time })}
          </Type>
          {isAuthor && (
            <div className={style.menu}>
              <MoreMenu position="right">
                <MenuItem>
                  <Type body2>Edit</Type>
                </MenuItem>
                <MenuItem>
                  <Type body2 color="red">
                    Delete
                  </Type>
                </MenuItem>
              </MoreMenu>
            </div>
          )}
        </div>
        <Type tag="div">
          <PressRenderer
            components={pressComponents}
            value={parseContent(post?.content)}
          />
        </Type>
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
            {post.comments?.map((comment, key) => (
              <Comment
                comment={comment}
                createdBy={comment.createdBy}
                key={comment.id || key}
              />
            ))}
            {canComment && (
              <CommentForm
                defaultValues={{ progressUpdateId: post?.id }}
                onSubmit={newCommentHandler}
              />
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

ProgressPost.propTypes = {
  spark: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  canComment: PropTypes.bool,
  reactionClick: PropTypes.func,
  reactionSelect: PropTypes.func,
  newCommentHandler: PropTypes.func
};

export { ProgressPost };
