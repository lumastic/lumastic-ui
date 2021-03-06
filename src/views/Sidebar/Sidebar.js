import PropTypes from "prop-types";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Divider,
  Link,
  List,
  NavButton,
  Type,
  Label,
  Avatar,
  Tooltip,
  IconButton
} from "../../components";
import { Hashtag, Plus, PaperAirplane } from "../../icons";
import classNames from "../../helpers/classNames";
import {
  createOrganizationRoute,
  feedbackRoute,
  helpRoute,
  sendInviteRoute,
  profileRoute,
  tagRoute,
  upgradeRoute
} from "../../routes";
import { Signature, SparksNav } from "../../templates";
import style from "./Sidebar.scss";
import { useUser } from "../../hooks";

const Sidebar = ({
  className,
  version,
  sparks = [],
  collaboratorSparks = [],
  organizations = [],
  topics = [],
  archiveSpark
}) => {
  const user = useUser();
  return (
    <Scrollbars autoHide>
      <nav
        className={classNames(className, style.sidebar)}
        data-testid="sidebar"
      >
        <SparksNav
          sparks={sparks}
          collaboratorSparks={collaboratorSparks}
          organizations={organizations}
          archiveSpark={archiveSpark}
        />
        <Divider />
        <Label
          className={style.label}
          right={
            <Tooltip position="top" label="New Organization">
              <Link to={createOrganizationRoute} button>
                <IconButton color="grey" className={style.plusBtn}>
                  <Plus />
                </IconButton>
              </Link>
            </Tooltip>
          }
        >
          My Organizations
        </Label>
        {organizations?.map(
          org =>
            !org?.isUserOrganization && (
              <NavButton to={profileRoute(org?.name)}>
                <Signature>
                  <Avatar size="small" src={org?.avatarURL} />
                  <Type body2>{org?.name}</Type>
                </Signature>
              </NavButton>
            )
        )}{" "}
        <Divider />
        <Label className={style.label}>Topics</Label>
        {topics?.map(tag => (
          <NavButton to={tagRoute(tag?.name)}>
            <Signature>
              <Hashtag />
              <Type body2>{tag?.name}</Type>
            </Signature>
          </NavButton>
        ))}
        <Divider />
        <NavButton to={helpRoute}>
          <Signature>
            <Type body2>👋</Type>
            <Type body2>Getting Started</Type>
          </Signature>
        </NavButton>
        <NavButton to="/guidelines">
          <Signature>
            <Type body2>📓</Type>
            <Type body2>Community Guidelines</Type>
          </Signature>
        </NavButton>
        <NavButton to={feedbackRoute} exact>
          <Signature>
            <Type body2>📣</Type>
            <Type body2>Send Us Feedback</Type>
          </Signature>
        </NavButton>
        {!user?.userProfile?.isLicensed && (
          <NavButton to={upgradeRoute}>
            <Signature>
              <Type body2>🚀</Type>
              <Type body2>Upgrade Membership</Type>
            </Signature>
          </NavButton>
        )}
        <NavButton to={sendInviteRoute} exact>
          <Signature>
            <Type color="grey">
              <PaperAirplane />
            </Type>
            <Type body2>Invite Friends to Join</Type>
          </Signature>
        </NavButton>
        <List>
          <Divider />
          <Link inline to="/terms">
            <Type caption color="grey">
              Terms & Conditions
            </Type>
          </Link>
          <div className={style.bottomlinks}>
            <Link inline to="/about">
              <Type caption color="grey">
                About Us
              </Type>
            </Link>
            <Link inline to="/version">
              <Type caption color="grey">
                {version}
              </Type>
            </Link>
          </div>
        </List>
      </nav>
    </Scrollbars>
  );
};

Sidebar.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  sparks: PropTypes.array,
  collaboratorSparks: PropTypes.array,
  organizations: PropTypes.array,
  topics: PropTypes.array,
  archiveSpark: PropTypes.func
};

export { Sidebar };
