import React from "react";
import PropTypes from "prop-types";

const CustomTooltip = ({ children }) => <div>{children}</div>;

CustomTooltip.propTypes = {
  children: PropTypes.node
};

export { CustomTooltip };
