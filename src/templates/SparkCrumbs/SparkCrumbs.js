import PropTypes from "prop-types";
import React from "react";
import { Avatar, Breadcrumbs, Link, Tooltip, Type } from "../../components";
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
      <Type body2={small} tag="div">
        {spark.title}
      </Type>
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
