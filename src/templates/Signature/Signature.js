import React, { Children } from "react";
import PropTypes from "prop-types";
import style from "./Signature.scss";
import classNames from "../../helpers/classNames";

const Signature = ({ children, className }) => {
  const twoChildren = Children.toArray(children);
  return (
    <div
      className={classNames(className, style.signature)}
      data-testid="signature"
    >
      <div className={style["sig-seal"]}>{twoChildren[0]}</div>
      <div className={style["sig-text"]}>{twoChildren[1]}</div>
    </div>
  );
};

Signature.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Signature };
