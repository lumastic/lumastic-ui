import React from "react";
import PropTypes from "prop-types";
import style from "./ProStamp.scss";
import classNames from "../../helpers/classNames";

const ProStamp = ({ children, className, early, ...rest }) => (
  <span
    className={classNames(className, style.prostamp)}
    data-testid="prostamp"
    {...rest}
  >
    {early ? "⚡️" : null}PRO
  </span>
);

ProStamp.propTypes = {
  children: PropTypes.node,
  early: PropTypes.bool,
  className: PropTypes.string
};

export { ProStamp };
