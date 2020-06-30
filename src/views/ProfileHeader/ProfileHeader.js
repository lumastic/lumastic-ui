import React from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Type } from "../../components";
import style from "./ProfileHeader.scss";
import classNames from "../../helpers/classNames";

const ProfileHeader = ({
  className,
  organization = {},
  isFollowing = false,
  isOrgOwner = false,
  followHandler,
  unfollowHandler
}) => {
  let action;
  if (isFollowing) {
    action = (
      <Button color="grey" onClick={unfollowHandler}>
        Unfollow
      </Button>
    );
  } else if (isOrgOwner) {
    action = <Button variant="outlined">Edit Profile</Button>;
  } else {
    action = (
      <Button variant="contained" onClick={followHandler}>
        Follow
      </Button>
    );
  }
  return (
    <div
      className={classNames(className, style.profileheader)}
      data-testid="profileheader"
    >
      <div className={style.hero}>
        <img
          src={
            organization?.headerImage ||
            "https://cdn.lumastic.com/media/v1/pages/demo/Header.png"
          }
          alt={`${organization?.name}'s header`}
          className={style.image}
        />
      </div>
      <div className={style["avatar-section"]}>
        <div className={style["avatar-wrapper"]}>
          <Avatar
            className={style.avatar}
            src={organization?.avatarURL}
            setSize="5rem"
          />
        </div>
        <div className={style.action}>{action}</div>
      </div>
      <div className={style.info}>
        <Type h4 style={{ lineHeight: 1 }}>
          {organization?.isUserOrganization
            ? organization?.createdBy?.name
            : organization?.name}
        </Type>
        <Type color="grey" gutterBottom>
          {`@${organization?.name}`}
        </Type>
        <Type gutterBottom>{organization?.bio}</Type>
        <div className={style.stats}>
          <Type body2 color="grey">
            <b>20</b> updates
          </Type>
          <Type body2 color="grey">
            <b>5</b> sparks
          </Type>
          <Type body2 color="grey">
            <b>{organization?.followers?.length}</b> followers
          </Type>
          {organization?.isUserOrganization ? (
            <Type body2 color="grey">
              <b>{organization?.createdBy?.following?.length}</b> following
            </Type>
          ) : (
            <Type body2 color="grey">
              <b>{organization?.members?.length}</b> members
            </Type>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  className: PropTypes.string,
  organization: PropTypes.object,
  isFollowing: PropTypes.bool,
  isOrgOwner: PropTypes.bool,
  followHandler: PropTypes.func,
  unfollowHandler: PropTypes.func
};

export { ProfileHeader };
