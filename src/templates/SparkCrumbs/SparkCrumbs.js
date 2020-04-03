import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../../components/Avatar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SparkSignature } from "../SparkSignature";

const SparkCrumbs = ({ className, avatarURL, spark = {}, small = false }) => (
  <Breadcrumbs className={className}>
    <Avatar src={avatarURL} />
    <SparkSignature spark={spark} small={small} />
  </Breadcrumbs>
);

SparkCrumbs.propTypes = {
  className: PropTypes.string,
  avatarURL: PropTypes.string,
  spark: PropTypes.object.isRequired,
  small: PropTypes.bool
};

export { SparkCrumbs };
