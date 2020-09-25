import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Link,
  Type
} from "../../components";
import { SearchForm } from "../../forms";
import { useUser } from "../../hooks";
import { MagnifyingGlass, LogOut } from "../../icons";
import { LeftPush } from "../../layouts";
import {
  exploreRoute,
  profileRoute,
  searchRoute,
  logoutRoute
} from "../../routes";
import { Signature } from "../../templates";
import style from "./PageAppBar.scss";

const PageAppBar = ({ icon, title, noSearch = false }) => {
  const { avatarURL, username } = useUser();
  const history = useHistory();
  const onSearch = searchString => {
    history.push(searchRoute(searchString));
  };
  return (
    <AppBar>
      <Container className={style.container}>
        <div>
          <Signature>
            <span className={style.icon}>{icon}</span>
            <Type h4>{title}</Type>
          </Signature>
        </div>
        <LeftPush>
          {!noSearch ? (
            <>
              <SearchForm
                placeholder="Search..."
                className={style.search}
                onSearch={onSearch}
              />
              <div className={style.searchBtn}>
                <Link button to={exploreRoute}>
                  <IconButton color="grey" size="big">
                    <MagnifyingGlass />
                  </IconButton>
                </Link>
              </div>
            </>
          ) : (
            <div />
          )}

          <Link to={profileRoute(username)} inline>
            <Avatar src={avatarURL} />
          </Link>

          <Link to={logoutRoute} inline>
            <IconButton color="grey" size="big">
              <LogOut />
            </IconButton>
          </Link>
        </LeftPush>
      </Container>
    </AppBar>
  );
};

PageAppBar.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  noSearch: PropTypes.bool
};

export { PageAppBar };
