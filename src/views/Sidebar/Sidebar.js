import PropTypes from "prop-types";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Divider, Link, List, NavButton, Type } from "../../components";
import classNames from "../../helpers/classNames";
import { Plus } from "../../icons";
import { createSparkRoute } from "../../routes";
import { SparksNav } from "../../templates";
import style from "./Sidebar.scss";

const Sidebar = ({ className, version, sparks = [], organizations = [] }) => (
  <Scrollbars autoHide>
    <nav className={classNames(className, style.sidebar)} data-testid="sidebar">
      <div className={style.sparks}>
        <SparksNav sparks={sparks} organizations={organizations} />
      </div>
      <List>
        <Divider />
        <Link inline to="/terms">
          <Type caption color="grey">
            Terms & Conditions
          </Type>
        </Link>
        <div className={style.bottomlinks}>
          <Link inline to="/about">
            <Type caption color="grey">
              About Us
            </Type>
          </Link>
          <Link inline to="/version">
            <Type caption color="grey">
              {version}
            </Type>
          </Link>
        </div>
      </List>
    </nav>
  </Scrollbars>
);

Sidebar.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  sparks: PropTypes.array,
  organizations: PropTypes.array
};

export { Sidebar };
