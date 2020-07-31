import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Type, Link } from "../../components";
import style from "./NotificationCard.scss";
import classNames from "../../helpers/classNames";
import { useUser } from "../../hooks";
import { formatTime } from "../../helpers";
import { profileRoute, viewSparkRoute } from "../../routes";

const NotificationCard = ({ notification = {}, className }) => {
  const { id } = useUser();
  return (
    <Card className={classNames(className, style.notificationcard)}>
      <Avatar src={notification?.sender?.avatarURL} size="big" />
      <div className={style.info}>
        <Type tag="div">
          <Link inline to={profileRoute(notification?.sender?.username)}>
            <b>{notification?.sender?.name?.split(" ")[0]}</b>
          </Link>{" "}
          commented on{" "}
          <Link
            inline
            to={profileRoute(notification?.post?.createdBy?.username)}
          >
            <b>
              {notification?.post?.createdBy?.id === id
                ? "your"
                : `${
                    notification?.post?.createdBy?.name?.split(" ")[0]
                  }'s`}{" "}
              post
            </b>
          </Link>
        </Type>
        <Type color="grey" tag="div" caption setSize="0.7rem">
          <Link
            inline
            to={viewSparkRoute(
              notification?.spark?.belongsTo?.name,
              notification?.spark?.id
            )}
          >
            {notification?.spark?.title}
          </Link>{" "}
          •{" "}
          {formatTime({
            time: notification?.post?.createdAt || notification?.time
          })}
        </Type>
        <Type className={style.content}>{notification?.content}</Type>
      </div>
    </Card>
  );
};

NotificationCard.propTypes = {
  notification: PropTypes.object,
  className: PropTypes.string
};

export { NotificationCard };
