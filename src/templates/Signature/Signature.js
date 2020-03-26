import React from "react";
import PropTypes from "prop-types";
import style from "./Signature.scss";
import classNames from "../../helpers/classNames";
import { Avatar } from "../../components/Avatar";
import { Type } from "../../components/Type";

const Signature = ({
  children,
  className,
  src = "https://cdn.lumastic.com/defaultAvatar.png",
  alt = "User Avatar"
}) => (
  <div
    className={classNames(className, style.signature)}
    data-testid="signature"
  >
    <Avatar className={style["sig-avatar"]} src={src} alt={alt} />
    <Type className={style["sig-text"]}>{children}</Type>
  </div>
);

Signature.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
};

export { Signature };
