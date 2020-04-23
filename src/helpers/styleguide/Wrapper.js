import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => <Router>{children}</Router>;

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
