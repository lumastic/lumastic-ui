import React from "react";
import PropTypes from "prop-types";
import style from "./Label.scss";
import { Type } from "../Type";
import classNames from "../../helpers/classNames";

const Label = ({ children, className, right }) => (
  <div className={classNames(className, style.label)}>
    <div className={style["label-text"]}>
      <Type overline color="grey">
        {children}
      </Type>
    </div>
    {right ? (
      <Type overline color="grey">
        <div className={style["label-action"]}>{right}</div>
      </Type>
    ) : null}
  </div>
);

Label.propTypes = {
  children: PropTypes.node,
  right: PropTypes.node,
  className: PropTypes.string
};

export { Label };
