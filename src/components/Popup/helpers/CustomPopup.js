import React from "react";
import PropTypes from "prop-types";

const CustomPopup = ({ children }) => <div>{children}</div>;

CustomPopup.propTypes = {
  children: PropTypes.node
};

export { CustomPopup };
