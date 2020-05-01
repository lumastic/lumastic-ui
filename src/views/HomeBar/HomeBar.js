import React from "react";
import PropTypes from "prop-types";
import { AppBar } from "../../components/AppBar";
import { Container } from "../../components/Container";
import { Home } from "../../icons/Home";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import { IconButton } from "../../components/IconButton";
import { Search } from "../../components/Search";
import { PageSignature } from "../../templates/PageSignature";
import style from "./HomeBar.scss";
import classNames from "../../helpers/classNames";

const HomeBar = ({ children, className, ...rest }) => (
  <AppBar>
    <Container className={style.container}>
      <PageSignature icon={<Home />} title="Latest Updates" />
      <Search placeholder="Search..." className={style.search} />
      <div className={style.searchBtn}>
        <IconButton color="grey" size="big">
          <MagnifyingGlass />
        </IconButton>
      </div>
    </Container>
  </AppBar>
);

HomeBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { HomeBar };
