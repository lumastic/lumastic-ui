import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../styles/link.scss";
import classNames from "../classNames";

const withLink = (component, linkProps = {}) => (
  <Link {...linkProps} className={classNames(styles.link, linkProps.className)}>
    {component}
  </Link>
);

withLink.propTypes = {
  component: PropTypes.node.isRequired,
  linkProps: PropTypes.object.isRequired
};

export default withLink;
