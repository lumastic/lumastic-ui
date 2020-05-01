import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Tooltip } from "../../components/Tooltip";
import { SparkSignature } from "../SparkSignature";
import withLink from "../../helpers/withLink";

const SparkCrumbs = ({
  className,
  organization = {},
  spark = {},
  small = false
}) => (
  <Breadcrumbs className={className}>
    {withLink(
      <Tooltip label={organization.name || "Organization name"} position="top">
        <Avatar src={organization.avatarURL} />
      </Tooltip>,
      { to: "/user" }
    )}
    {withLink(<SparkSignature spark={spark} small={small} />, { to: "/spark" })}
  </Breadcrumbs>
);

SparkCrumbs.propTypes = {
  className: PropTypes.string,
  organization: PropTypes.object,
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkCrumbs };
