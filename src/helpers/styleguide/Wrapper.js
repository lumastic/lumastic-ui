import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { FormContext } from "react-hook-form";
import { UserProvider } from "../../hooks";
import { drew } from "../../data/user.db";

const Wrapper = ({ children }) => (
  <UserProvider {...drew}>
    <Router>{children}</Router>
  </UserProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
