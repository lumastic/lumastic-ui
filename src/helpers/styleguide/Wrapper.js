import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { FormContext } from "react-hook-form";

const Wrapper = ({ children }) => (
  <Router>
    <FormContext>{children}</FormContext>
  </Router>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
