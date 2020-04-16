import React from "react";
import PropTypes from "prop-types";
import style from "./EmojiSelector.scss";
import classNames from "../../helpers/classNames";

const EmojiSelector = ({ children, className, ...rest }) => (
  <div className={classNames(className, style.emojiselector)} data-testid={"emojiselector"} {...rest}>
    {children}
  </div>
);

EmojiSelector.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { EmojiSelector };
