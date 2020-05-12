import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useHistory } from "react-router-dom";
import style from "./Link.scss";
import classNames from "../../helpers/classNames";

const Link = ({ children, className, button = false, to }) => {
  const history = useHistory();
  if (!button) {
    return (
      <RouterLink to={to} className={classNames(style.link, className)}>
        {children}
      </RouterLink>
    );
  }
  const child = Children.map(children, c =>
    cloneElement(c, {
      onClick: () => {
        if (c.props.onClick) c.props.onClick();
        history.push(to);
      }
    })
  );
  return <>{child}</>;
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  button: PropTypes.bool
};

export { Link };
