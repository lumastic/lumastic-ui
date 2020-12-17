import PropTypes from "prop-types";
import React from "react";
import { Avatar, Card, Link, Type } from "../../components";
import classNames from "../../helpers/classNames";
import { profileRoute } from "../../routes";
import { MoreMenu } from "../../templates";
import style from "./OrgCard.scss";

const OrgCard = ({
  className,
  user,
  organization,
  noBio,
  options,
  ...rest
}) => (
  <Card
    className={classNames(className, style.orgcard)}
    data-testid="orgcard"
    {...rest}
  >
    <div className={style.header}>
      <Link to={profileRoute(organization?.name || user?.username)} inline>
        <Avatar
          src={organization?.avatarURL || user?.avatarURL}
          setSize="3rem"
        />
      </Link>
      <div className={style.info}>
        <Link to={profileRoute(organization?.name || user?.username)} inline>
          <Type h4 style={{ lineHeight: 1 }}>
            {organization?.name || user?.name}
          </Type>
        </Link>
        <Link to={profileRoute(organization?.name || user?.username)} inline>
          <Type body2 color="grey">
            @{organization?.name || user?.username}
          </Type>
        </Link>
      </div>
    </div>
    {!noBio && (
      <div className={style.bio}>
        <Type>{organization?.bio || user?.userProfile?.bio}</Type>
      </div>
    )}
    {options && (
      <div className={style.menu}>
        <MoreMenu position="right">{options}</MoreMenu>
      </div>
    )}
  </Card>
);

OrgCard.propTypes = {
  organization: PropTypes.object,
  user: PropTypes.object,
  noBio: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.func
};

export { OrgCard };
