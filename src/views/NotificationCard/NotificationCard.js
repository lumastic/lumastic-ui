import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Link,
  Tooltip,
  Type
} from "../../components";
import { formatTime, parseContent } from "../../helpers";
import classNames from "../../helpers/classNames";
import { Checkmark } from "../../icons";
import { Mention, pressComponents, Tag } from "../../PressHelpers";
import { profileRoute, viewPostRoute, viewSparkRoute } from "../../routes";
import style from "./NotificationCard.scss";

const NotificationCard = ({
  notification = {},
  className,
  onRead = () => console.log("Read"),
  onUnread = () => console.log("Unread")
}) => {
  const {
    actor,
    id,
    entity_id,
    entity_type,
    spark,
    post_ref_id,
    read,
    content,
    createdAt
  } = notification;
  let action = "";
  let label = "";
  switch (entity_type) {
    case "MentionProgressUpdate":
      action = "mentioned you in";
      label = "a post";
      break;
    case "MentionProgressUpdateComment":
      action = "mentioned you in";
      label = "a comment";
      break;
    case "ProgressUpdateComment":
      action = "commented on";
      label = "your post";
      break;
    case "FollowedUserAction":
      // action = "commented on";
      // label = "a post";
      // break;
      return null;
    default:
      break;
  }
  return (
    <Card className={classNames(className, style.notificationcard)}>
      <Avatar src={actor?.avatarURL} size="big" />
      <div className={style.info}>
        <div className={style.toprow}>
          <div>
            <Type tag="div">
              <Link inline to={profileRoute(actor?.name)}>
                <b>
                  {actor?.isUserProfile
                    ? actor?.createdBy?.name?.split(" ")[0]
                    : actor?.name}
                </b>
              </Link>{" "}
              {action}{" "}
              <Link
                inline
                to={viewPostRoute(
                  spark?.belongsTo?.name,
                  spark?.id,
                  post_ref_id || entity_id
                )}
              >
                <b>{label}</b>
              </Link>
            </Type>
            <Type color="grey" tag="div" caption setSize="0.7rem">
              <Link
                inline
                to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}
              >
                {spark?.title}
              </Link>
              {spark && ` • `}
              {formatTime({
                time: createdAt
              })}
            </Type>
          </div>
          {onRead && !read && (
            <div>
              <Tooltip label="Mark as read" position="left">
                <IconButton
                  size="small"
                  variant="contained"
                  onClick={() => onRead(id)}
                >
                  <Checkmark />
                </IconButton>
              </Tooltip>
            </div>
          )}
          {onUnread && read && (
            <div>
              <Tooltip label="Mark unread" position="left">
                <IconButton
                  size="small"
                  color="grey"
                  onClick={() => onUnread(id)}
                >
                  <Checkmark />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>

        {content && (
          <Type className={style.content} tag="div">
            <PressRenderer
              components={pressComponents}
              value={parseContent(content)}
              renderMention={Mention}
              renderTag={Tag}
            />
          </Type>
        )}
      </div>
    </Card>
  );
};

NotificationCard.propTypes = {
  notification: PropTypes.object,
  className: PropTypes.string,
  onRead: PropTypes.func,
  onUnread: PropTypes.func
};

export { NotificationCard };
