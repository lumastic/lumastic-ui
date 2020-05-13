import PropTypes from "prop-types";
import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Search,
  Link
} from "../../components";
import { useUser } from "../../hooks";
import { Home, MagnifyingGlass } from "../../icons";
import { profileRoute } from "../../routes";
import { PageSignature } from "../../templates";
import style from "./HomeBar.scss";

const HomeBar = () => {
  const { avatarURL, username } = useUser();
  return (
    <AppBar>
      <Container className={style.container}>
        <div>
          <PageSignature icon={<Home />} title="Home" />
        </div>
        <div className={style.right}>
          <Search placeholder="Search..." className={style.search} />
          <div className={style.searchBtn}>
            <IconButton color="grey" size="big">
              <MagnifyingGlass />
            </IconButton>
          </div>
          <Link to={profileRoute(username)} inline>
            <Avatar src={avatarURL} />
          </Link>
        </div>
      </Container>
    </AppBar>
  );
};

HomeBar.propTypes = {};

export { HomeBar };
