import React, { createElement } from "react";
import PropTypes from "prop-types";
import style from "./Badge.scss";
import classNames from "../../helpers/classNames";

const Badge = ({
  children,
  className,
  anchor = { v: "bottom", h: "right" },
  color = "green",
  noBorder = false,
  render
}) => (
  <div className={style.badged} data-testid="badge">
    {children}
    {!render ? (
      <div
        className={classNames(
          className,
          style.badge,
          style.circle,
          style[color],
          style[anchor.v],
          style[anchor.h],
          { [style.border]: !noBorder }
        )}
      />
    ) : (
      <div
        className={classNames(style.badge, style[anchor.v], style[anchor.h])}
      >
        {render}
      </div>
    )}
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
  noBorder: PropTypes.bool,
  render: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};

export { Badge };
