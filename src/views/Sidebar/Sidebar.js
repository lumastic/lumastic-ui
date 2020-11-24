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
import { Plus } from "../../icons";
import classNames from "../../helpers/classNames";
import {
  createOrganizationRoute,
  profileRoute,
  upgradeRoute
} from "../../routes";
import { Signature, SparksNav } from "../../templates";
import style from "./Sidebar.scss";
import { useUser } from "../../hooks";

const Sidebar = ({
  className,
  version,
  sparks = [],
  organizations = [],
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
          organizations={organizations}
          archiveSpark={archiveSpark}
        />
        {organizations.length > 1 && (
          <>
            <Divider />
            <Label
              className={style.label}
              right={
                <Tooltip position="top" label="New Organization">
                  <Link to={createOrganizationRoute}>
                    <IconButton color="grey">
                      <Plus />
                    </IconButton>
                  </Link>
                </Tooltip>
              }
            >
              My Organizations
            </Label>
            {organizations.map(
              org =>
                !org?.isUserOrganization && (
                  <NavButton to={profileRoute(org?.name)}>
                    <Signature>
                      <Avatar size="small" src={org?.avatarURL} />
                      <Type body2>{org?.name}</Type>
                    </Signature>
                  </NavButton>
                )
            )}
          </>
        )}

        <Divider />
        <NavButton>
          <Signature>
            <Type body2>👋</Type>
            <Type body2>Getting Started</Type>
          </Signature>
        </NavButton>
        <NavButton>
          <Signature>
            <Type body2>📓</Type>
            <Type body2>Community Guidelines</Type>
          </Signature>
        </NavButton>
        {!user?.userProfile?.isLicensed && (
          <NavButton to={upgradeRoute}>
            <Signature>
              <Type body2>🚀</Type>
              <Type body2>Upgrade membership</Type>
            </Signature>
          </NavButton>
        )}

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
  organizations: PropTypes.array,
  archiveSpark: PropTypes.func
};

export { Sidebar };
