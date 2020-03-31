import React from "react";
import PropTypes from "prop-types";
import style from "./BoardCard.scss";
import classNames from "../../helpers/classNames";

const BoardCard = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.boardcard)} data-testid={"boardcard"} {...rest}>
    {children}
  </div>
);

BoardCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { BoardCard };
