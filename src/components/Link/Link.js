import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useHistory } from "react-router-dom";
import style from "./Link.scss";
import classNames from "../../helpers/classNames";

const Link = ({
  children,
  className,
  button = false,
  to,
  inline,
  highlight
}) => {
  const history = useHistory();
  const toObj = typeof to === "string" ? { pathname: to } : to;
  if (!button) {
    return (
      <RouterLink
        to={location => ({
          ...toObj,
          state: {
            ...toObj?.state,
            from: location?.state?.modal ? location?.state?.from : location
          }
        })}
        className={classNames(
          style.link,
          className,
          {
            [style.inline]: inline
          },
          {
            [style.highlight]: highlight
          }
        )}
      >
        {children}
      </RouterLink>
    );
  }
  const child = Children.map(children, c =>
    cloneElement(c, {
      onClick: e => {
        // e.stopPropagation();
        if (c.props.onClick) c.props.onClick(e);
        history.push({
          ...toObj,
          state: {
            ...toObj?.state,
            from: history?.location?.state?.modal
              ? history?.location?.state?.from
              : history?.location
          }
        });
      }
    })
  );
  return <>{child}</>;
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.any.isRequired,
  button: PropTypes.bool,
  inline: PropTypes.bool,
  highlight: PropTypes.bool
};

export { Link };
