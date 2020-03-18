import React from "react";
import PropTypes from "prop-types";
import style from "./Type.scss";
import classNames from "../../helpers/classNames";
import getTag from "../../helpers/getTag";

const Type = ({
  children,
  className,
  h1,
  h2,
  h3,
  h4,
  caption,
  overline,
  size,
  tag,
  color = "normal"
}) => {
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
        { [style.caption]: caption },
        { [style.overline]: overline },
        style[color]
      )}
      style={{ fontSize: size }}
      data-testid="type"
    >
      {children}
    </TagName>
  );
};

Type.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  caption: PropTypes.bool,
  overline: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", "span", "div"]),
  color: PropTypes.oneOf(["normal", "primary", "red", "green", "grey"])
};

export { Type };
