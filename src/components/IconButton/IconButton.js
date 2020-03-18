import React from "react";
import PropTypes from "prop-types";
import style from "./IconButton.scss";
import classNames from "../../helpers/classNames";
import { Button } from "../Button";

const IconButton = ({ children, className, ...rest }) => (
  <div className={classNames(className, style["icon-button-container"])}>
    <Button {...rest} className={style.icon}>
      <div className={style["button-icon"]}>{children}</div>
    </Button>
  </div>
);

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { IconButton };
