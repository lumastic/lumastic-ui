import PropTypes from "prop-types";
import React from "react";
import { Avatar, Link, Breadcrumbs, Tooltip } from "../../components";
import { SparkSignature } from "../SparkSignature";
import { profileRoute, viewSparkRoute } from "../../routes";

const SparkCrumbs = ({
  className,
  organization = {},
  spark = {},
  small = false
}) => (
  <Breadcrumbs className={className}>
    <Link to={profileRoute(organization.name)} inline>
      <Tooltip label={organization.name || "Organization name"} position="top">
        <Avatar src={organization.avatarURL} />
      </Tooltip>
    </Link>
    <Link to={viewSparkRoute(organization.name, spark.id)} inline>
      <SparkSignature spark={spark} small={small} />
    </Link>
  </Breadcrumbs>
);

SparkCrumbs.propTypes = {
  className: PropTypes.string,
  organization: PropTypes.object,
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkCrumbs };
