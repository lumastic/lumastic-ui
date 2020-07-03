import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { drew } from "../../data/user.db";
import { UserProvider } from "../../hooks";

const Wrapper = ({ children }) => (
  <UserProvider {...drew}>
    <Router>{children}</Router>
  </UserProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
