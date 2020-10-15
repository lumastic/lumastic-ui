import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Divider,
  Link,
  List,
  MenuItem,
  NavButton,
  Type
} from "../../components";
import classNames from "../../helpers/classNames";
import { Plus } from "../../icons";
import { createOrganizationRoute, createSparkRoute } from "../../routes";
import { OrgSelect, Signature, SparksNav } from "../../templates";
import style from "./Sidebar.scss";

const Sidebar = ({ className, version, sparks = [], organizations = [] }) => {
  const [org, setOrg] = useState("all");
  const [sparkList, setSparks] = useState(sparks);
  useEffect(() => {
    if (org === "all") {
      setSparks(sparks);
    } else {
      setSparks(sparks.filter(spark => spark?.belongsTo?.id === org));
    }
  }, [org, sparks]);
  const onOrgChange = orgId => {
    setOrg(orgId);
  };
  return (
    <Scrollbars autoHide>
      <nav
        className={classNames(className, style.sidebar)}
        data-testid="sidebar"
      >
        <div className={style.sparks}>
          <OrgSelect
            organizations={organizations}
            asFilter
            small
            defaultValue="all"
            onChange={onOrgChange}
            addOption={
              <Link button to={createOrganizationRoute}>
                <MenuItem>
                  <Signature>
                    <Type>
                      <Plus />
                    </Type>
                    <Type>New Organization</Type>
                  </Signature>
                </MenuItem>
              </Link>
            }
          />

          <SparksNav sparks={sparkList} />
        </div>
        <NavButton
          to={createSparkRoute}
          exact
          path={createSparkRoute.pathname}
          className={style.newbtn}
        >
          <Type body2 tag="div" color="primary" className={style.type}>
            <Plus /> <b>NEW SPARK</b>
          </Type>
        </NavButton>
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
};

Sidebar.propTypes = {
  version: PropTypes.string,
  className: PropTypes.string,
  sparks: PropTypes.array,
  organizations: PropTypes.array
};

export { Sidebar };
