import React from "react";
import PropTypes from "prop-types";
import style from "./Badge.scss";
import classNames from "../../helpers/classNames";

const Badge = ({
  children,
  className,
  anchor = { v: "bottom", h: "right" },
  color = "green",
  noBorder = false
}) => (
  <div className={style.badged} data-testid="badge">
    {children}
    <div
      className={classNames(
        className,
        style.badge,
        style[color],
        style[anchor.v],
        style[anchor.h],
        { [style.border]: !noBorder }
      )}
    />
  </div>
);

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  anchor: PropTypes.shape({
    v: PropTypes.oneOf(["top", "bottom"]),
    h: PropTypes.oneOf(["left", "right"])
  }),
  color: PropTypes.oneOf(["green", "secondary", "red", "yellow"]),
  noBorder: PropTypes.bool
};

export { Badge };
