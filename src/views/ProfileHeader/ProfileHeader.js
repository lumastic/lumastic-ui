import React from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Type, Link } from "../../components";
import style from "./ProfileHeader.scss";
import classNames from "../../helpers/classNames";
import { orgSettingsRoute, settingsRoute } from "../../routes";

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
  } else {
    action = (
      <Button variant="contained" onClick={followHandler}>
        Follow
      </Button>
    );
  }
  if (isOrgOwner) {
    action = organization.isUserOrganization ? (
      <Link button to={settingsRoute()}>
        <Button variant="outlined">Edit Profile</Button>
      </Link>
    ) : (
      <Link button to={orgSettingsRoute(organization.name)}>
        <Button variant="outlined">Settings</Button>
      </Link>
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
            organization?.headerURL ||
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
            src={
              organization?.isUserOrganization
                ? organization?.createdBy?.avatarURL
                : organization?.avatarURL
            }
            setSize="5rem"
          />
        </div>
        <div className={style.action}>{action}</div>
      </div>
      <div className={style.info}>
        <Type h3 style={{ lineHeight: 1 }}>
          {organization?.isUserOrganization
            ? organization?.createdBy?.name
            : organization?.name}
        </Type>
        <Type color="grey" gutterBottom>
          {`@${organization?.name}`}
        </Type>
        <Type gutterBottom>{organization?.bio}</Type>
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
