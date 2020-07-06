import PropTypes from "prop-types";
import React from "react";
import { Avatar, Link, Breadcrumbs, Tooltip } from "../../components";
import { SparkSignature } from "../SparkSignature";
import { profileRoute, viewSparkRoute } from "../../routes";

const SparkCrumbs = ({
  className,
  organization = {},
  user = {},
  spark = {},
  small = false
}) => (
  <Breadcrumbs className={className}>
    <Link to={profileRoute(user.username || organization.name)} inline>
      <Tooltip label={user.name || organization.name} position="top">
        <Avatar src={user.avatarURL || organization.avatarURL} />
      </Tooltip>
    </Link>
    <Link
      to={viewSparkRoute(user.username || organization.name, spark.id)}
      inline
    >
      <SparkSignature spark={spark} small={small} />
    </Link>
  </Breadcrumbs>
);

SparkCrumbs.propTypes = {
  className: PropTypes.string,
  organization: PropTypes.object,
  user: PropTypes.object,
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkCrumbs };
