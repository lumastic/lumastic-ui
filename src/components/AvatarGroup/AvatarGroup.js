import React from "react";
import PropTypes from "prop-types";
import style from "./AvatarGroup.scss";
import classNames from "../../helpers/classNames";

const AvatarGroup = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.avatargroup)} data-testid={"avatargroup"} {...rest}>
    {children}
  </div>
);

AvatarGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { AvatarGroup };
