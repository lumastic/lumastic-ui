import React from "react";
import PropTypes from "prop-types";
import { LogoText, Symbol } from "../../icons";
import style from "./Logo.scss";
import classNames from "../../helpers/classNames";

const Logo = ({ children, className, ...rest }) => (
  <div className={style["logo-container"]}>
    <span className={style.symbol}>
      <Symbol />
    </span>
    <span className={style.text}>
      <LogoText />
    </span>
  </div>
);

Logo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { Logo };
