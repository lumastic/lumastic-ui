import React from "react";
import PropTypes from "prop-types";
import { Main } from "../../components/Main";
import { Container } from "../../components/Container";

const MainContainer = ({ children }) => (
  <Main>
    <Container>{children}</Container>
  </Main>
);

MainContainer.propTypes = {
  children: PropTypes.node
};

export { MainContainer };
