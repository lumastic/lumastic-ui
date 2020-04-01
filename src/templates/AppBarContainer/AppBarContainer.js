import React from "react";
import PropTypes from "prop-types";
import { AppBar } from "../../components/AppBar";
import { Container } from "../../components/Container";

const AppBarContainer = ({ children }) => (
  <AppBar>
    <Container>{children}</Container>
  </AppBar>
);

AppBarContainer.propTypes = {
  children: PropTypes.node
};

export { AppBarContainer };
