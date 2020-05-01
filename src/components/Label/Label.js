import React from "react";
import PropTypes from "prop-types";
import { Type } from "../Type";
import style from "./Label.scss";
import classNames from "../../helpers/classNames";

const Label = ({ children, className, right }) => (
  <div className={classNames(className, style.label)}>
    <div className={style["label-text"]}>
      <Type overline color="grey">
        {children}
      </Type>
    </div>
    {right ? (
      <div className={style["label-action"]}>
        <Type overline color="grey">
          {right}
        </Type>
      </div>
    ) : null}
  </div>
);

Label.propTypes = {
  children: PropTypes.node,
  right: PropTypes.node,
  className: PropTypes.string
};

export { Label };
