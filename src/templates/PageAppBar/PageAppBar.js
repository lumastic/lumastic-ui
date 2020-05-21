import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  Search,
  Link,
  IconButton,
  Avatar,
  Type
} from "../../components";
import { Signature } from "..";
import { LeftPush } from "../../layouts";
import { MagnifyingGlass } from "../../icons";
import { useUser } from "../../hooks";
import { exploreRoute, profileRoute } from "../../routes";
import style from "./PageAppBar.scss";
import classNames from "../../helpers/classNames";

const PageAppBar = ({ icon, title }) => {
  const { avatarURL, username } = useUser();
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
          <Search placeholder="Search..." className={style.search} />
          <div className={style.searchBtn}>
            <Link button to={exploreRoute}>
              <IconButton color="grey" size="big">
                <MagnifyingGlass />
              </IconButton>
            </Link>
          </div>
          <Link to={profileRoute(username)} inline>
            <Avatar src={avatarURL} />
          </Link>
        </LeftPush>
      </Container>
    </AppBar>
  );
};

PageAppBar.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string
};

export { PageAppBar };
