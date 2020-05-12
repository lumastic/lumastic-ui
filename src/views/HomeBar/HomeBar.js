import React from "react";
import PropTypes from "prop-types";
import { AppBar } from "../../components/AppBar";
import { Container } from "../../components/Container";
import { Home } from "../../icons/Home";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import { IconButton } from "../../components/IconButton";
import { Search } from "../../components/Search";
import { PageSignature } from "../../templates/PageSignature";
import { useUser } from "../../hooks";
import style from "./HomeBar.scss";
import { Avatar } from "../../components";
import withLink from "../../helpers/withLink";
import { profileRoute } from "../../routes/routes";

const HomeBar = ({ children, className, ...rest }) => {
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
          {withLink(<Avatar src={avatarURL} />, { to: profileRoute(username) })}
        </div>
      </Container>
    </AppBar>
  );
};

HomeBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { HomeBar };
