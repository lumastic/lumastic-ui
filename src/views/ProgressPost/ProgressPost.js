import PropTypes from "prop-types";
import React from "react";
import { PressRenderer } from "pressdk";
import {
  Card,
  Divider,
  Type,
  Point,
  MenuItem,
  Link,
  Avatar,
  Breadcrumbs
} from "../../components";
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
import { editPostRoute, viewSparkRoute, profileRoute } from "../../routes";

const ProgressPost = ({
  spark = {},
  post = {},
  canComment = false,
  reactionClick,
  reactionSelect,
  newCommentHandler,
  deleteHandler
}) => {
  const { id } = useUser();
  const isAuthor = post?.createdBy?.id === id;
  return (
    <Card className={style.progresspost}>
      <div className={style.postheader}>
        <Link to={profileRoute(post?.createdBy?.username)} inline>
          <Avatar src={post?.createdBy?.src} size="big" />
        </Link>
        <div className={style.info}>
          <Breadcrumbs>
            <Link to={profileRoute(post?.createdBy?.username)} inline>
              <Type tag="div">
                <b>{post?.createdBy?.name}</b>
              </Type>
            </Link>
            <Link to={viewSparkRoute(spark?.belongsTo?.name, spark.id)} inline>
              <Type tag="div">{spark?.title}</Type>
            </Link>
          </Breadcrumbs>

          <Type
            color="grey"
            className={style.time}
            tag="div"
            caption
            setSize="0.7rem"
          >
            {`${post?.spark?.visibility || "Public"} • ${formatTime({
              time: post.createdAt || post.time
            })}`}
          </Type>
        </div>
        {isAuthor && (
          <div className={style.menu}>
            <MoreMenu position="right">
              <Link
                button
                to={editPostRoute(spark?.belongsTo?.name, spark?.id, post?.id)}
              >
                <MenuItem>
                  <Type body2>Edit</Type>
                </MenuItem>
              </Link>
              {/* <MenuItem onClick={deleteHandler}>
                  <Type body2 color="red">
                    Delete
                  </Type>
                </MenuItem> */}
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
      {}
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
  );
};

ProgressPost.propTypes = {
  spark: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  canComment: PropTypes.bool,
  reactionClick: PropTypes.func,
  reactionSelect: PropTypes.func,
  newCommentHandler: PropTypes.func,
  deleteHandler: PropTypes.func
};

export { ProgressPost };
