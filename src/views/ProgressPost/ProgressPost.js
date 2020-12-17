import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import {
  Avatar,
  Breadcrumbs,
  Card,
  Divider,
  Link,
  MenuItem,
  Type,
  Tooltip,
  Badge,
  ProStamp
} from "../../components";
import { CommentForm } from "../../forms";
import { parseContent, classNames } from "../../helpers";
import formatTime from "../../helpers/formatTime";
import { useUser } from "../../hooks";
import { pressComponents, Mention, Tag } from "../../PressHelpers";
import { editPostRoute, profileRoute, viewSparkRoute } from "../../routes";
import { AddEmoji, Comment, MoreMenu, Reaction } from "../../templates";
import recommendReactions from "./helpers/recommendReactions.json";
import style from "./ProgressPost.scss";

const ProgressPost = ({
  spark = {},
  post = {},
  canComment = false,
  reactionClick,
  reactionSelect,
  newCommentHandler,
  deleteHandler,
  className
}) => {
  const { id } = useUser();
  const isAdmin = spark?.belongsTo?.owners?.find(owner => owner?.id === id);
  return (
    <Card className={classNames(style.progresspost, className)}>
      <div className={style.postheader}>
        <Link to={profileRoute(post?.createdBy?.username)} inline>
          {spark?.belongsTo?.isUserOrganization ? (
            <Avatar src={post?.createdBy?.avatarURL} size="big" />
          ) : (
            <Badge
              render={
                <Link to={profileRoute(spark?.belongsTo?.name)} inline>
                  <Avatar src={spark?.belongsTo?.avatarURL} size="badge" />
                </Link>
              }
            >
              <Avatar src={post?.createdBy?.avatarURL} size="big" />
            </Badge>
          )}
        </Link>
        <div className={style.info}>
          <Breadcrumbs>
            <Link to={profileRoute(post?.createdBy?.username)} inline>
              <Type tag="div" body2>
                {post?.createdBy?.name}{" "}
                {post?.createdBy?.userProfile?.isLicensed && <ProStamp />}
              </Type>
            </Link>
            <Link to={viewSparkRoute(spark?.belongsTo?.name, spark.id)} inline>
              <Type tag="div" body2>
                {spark?.title}
              </Type>
            </Link>
          </Breadcrumbs>
          <div>
            {!spark?.belongsTo?.isUserOrganization && (
              <Link inline to={profileRoute(spark?.belongsTo?.name)}>
                <Type color="grey" tag="div" caption setSize="0.7rem">
                  {spark?.belongsTo?.name}
                  {" • "}
                </Type>
              </Link>
            )}
            <Tooltip
              postition="top"
              label={formatTime({
                time: post.createdAt || post.time,
                fullDate: true,
                withTime: true
              })}
            >
              <Type
                color="grey"
                className={style.time}
                tag="div"
                caption
                setSize="0.7rem"
              >
                {`${spark?.visibility ||
                  post?.spark?.visibility ||
                  "Public"} • ${formatTime({
                  time: post.createdAt || post.time
                })}`}
              </Type>
            </Tooltip>
          </div>
        </div>
        {isAdmin && (
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
              <MenuItem
                onClick={() =>
                  deleteHandler(post?.id, {
                    archived: true,
                    content: post?.content
                  })
                }
              >
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
          renderMention={Mention}
          renderTag={Tag}
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
      {(post.comments || canComment) && (
        <div className={style.comments}>
          <Divider />
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
  deleteHandler: PropTypes.func,
  className: PropTypes.string
};

export { ProgressPost };
