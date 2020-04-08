import React from "react";
import PropTypes from "prop-types";
import style from "./Avatar.scss";
import classNames from "../../helpers/classNames";

const Avatar = ({
  src = "https://cdn.lumastic.com/defaultAvatar.png",
  alt = "User Avatar",
  size = "normal",
  shadow = false,
  setSize = null,
  className
}) => (
  <div
    className={classNames(className, style.avatar, style[size], {
      [style.shadow]: shadow
    })}
    style={{ width: setSize, height: setSize }}
    data-testid="avatar"
  >
    <img src={src} alt={alt} />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["normal", "big", "small"]),
  shadow: PropTypes.bool,
  setSize: PropTypes.string,
  className: PropTypes.string
};

export { Avatar };
