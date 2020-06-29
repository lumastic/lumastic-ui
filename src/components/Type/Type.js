import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import getTag from "./helpers/getTag";
import style from "./Type.scss";
import classNames from "../../helpers/classNames";

const Type = forwardRef(
  (
    {
      children,
      className,
      h1,
      h2,
      h3,
      h4,
      caption,
      overline,
      body2,
      gutterBottom,
      setSize,
      align = "left",
      tag,
      color = "normal",
      ...rest
    },
    ref
  ) => {
    const TagName = tag || getTag({ h1, h2, h3, h4 });
    return (
      <TagName
        className={classNames(
          className,
          style.type,
          { [style.h1]: h1 },
          { [style.h2]: h2 },
          { [style.h3]: h3 },
          { [style.h4]: h4 },
          style[align],
          { [style.caption]: caption },
          { [style.overline]: overline },
          { [style.body2]: body2 },
          { [style["gutter-bottom"]]: gutterBottom },
          style[color]
        )}
        style={{ fontSize: setSize }}
        data-testid="type"
        ref={ref}
        {...rest}
      >
        {children}
      </TagName>
    );
  }
);

Type.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  caption: PropTypes.bool,
  overline: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  body2: PropTypes.bool,
  setSize: PropTypes.string,
  align: PropTypes.oneOf(["center", "left", "right"]),
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", "span", "div"]),
  color: PropTypes.oneOf([
    "normal",
    "primary",
    "secondary",
    "accent",
    "red",
    "green",
    "grey"
  ])
};

export { Type };
