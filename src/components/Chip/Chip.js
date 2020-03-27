import React from "react";
import PropTypes from "prop-types";
import style from "./Chip.scss";
import classNames from "../../helpers/classNames";
import { IconButton } from "../IconButton";
import { Type } from "../Type";
import { Times } from "../../icons/Times";

const Chip = ({ className, color = "primary", symbol, label, onRemove }) => (
  <div
    className={classNames(className, style.chip, style[color])}
    data-testid="chip"
  >
    <div className={style.symbol}>{symbol}</div>
    <div className={style.label}>
      <Type body2>{label}</Type>
    </div>
    {onRemove ? (
      <IconButton
        className={style.remove}
        onClick={onRemove}
        color={color}
        setSize="0.65rem"
      >
        <Times />
      </IconButton>
    ) : null}
  </div>
);

Chip.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary, grey"]),
  symbol: PropTypes.node,
  label: PropTypes.node,
  onRemove: PropTypes.func
};

export { Chip };
