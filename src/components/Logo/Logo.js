import React from "react";
import PropTypes from "prop-types";
import { LogoText, Symbol } from "../../icons";
import style from "./Logo.scss";
import classNames from "../../helpers/classNames";

const Logo = ({ white, stacked, ...rest }) => (
  <div
    className={classNames(
      style["logo-container"],
      { [style.white]: white },
      { [style.stacked]: stacked },
      { [style.cursor]: rest?.onClick }
    )}
    {...rest}
  >
    <span className={style.symbol}>
      <Symbol />
    </span>
    <span className={style.text}>
      <LogoText />
    </span>
  </div>
);

Logo.propTypes = {
  white: PropTypes.bool,
  stacked: PropTypes.bool
};

export { Logo };
