import { PressRenderer } from "pressdk";
import PropTypes from "prop-types";
import React from "react";
import { Avatar, Card, Link, Type } from "../../components";
import { formatTime, parseContent } from "../../helpers";
import classNames from "../../helpers/classNames";
import { Mention, pressComponents, Tag } from "../../PressHelpers";
import { profileRoute, viewPostRoute, viewSparkRoute } from "../../routes";
import style from "./NotificationCard.scss";

const NotificationCard = ({ notification = {}, className }) => {
  const {
    actor,
    entity_id,
    entity_type,
    spark,
    post_ref_id,
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
          <Link inline to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}>
            {spark?.title}
          </Link>
          {spark && ` • `}
          {formatTime({
            time: createdAt
          })}
        </Type>
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
  className: PropTypes.string
};

export { NotificationCard };
