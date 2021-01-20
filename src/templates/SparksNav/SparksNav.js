import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  IconButton,
  Label,
  Link,
  MenuItem,
  NavButton,
  Tooltip,
  Type
} from "../../components";
import classNames from "../../helpers/classNames";
import { useUser } from "../../hooks";
import { Plus } from "../../icons";
import {
  archiveSparkRoute,
  createBoardRoute,
  createOrganizationRoute,
  createSparkRoute,
  editSparkRoute,
  viewBoardRoute,
  viewSparkRoute
} from "../../routes";
import { Accordion, AccordionContent, AccordionTrigger } from "../Accordion";
import { MoreMenu } from "../MoreMenu";
import { OrgSelect } from "../OrgSelect";
import { Signature } from "../Signature";
import style from "./SparksNav.scss";

const SparksNavButton = ({ spark = {}, isOwner }) => {
  const [menuShowing, setShowing] = useState(false);

  return (
    <Accordion>
      <NavButton
        exact
        to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}
        className={style.navbtn}
      >
        <AccordionTrigger>
          <div className={style.container}>
            <Type tag="div" className={style.title} body2>
              {spark?.title}
            </Type>
            <div
              className={classNames(
                { [style.showing]: menuShowing },
                style.btns
              )}
            >
              <div className={style.btn}>
                <MoreMenu
                  onOpen={() => {
                    setShowing(true);
                  }}
                  onClose={() => setShowing(false)}
                  position="right"
                >
                  <Link
                    button
                    to={editSparkRoute(spark?.belongsTo?.name, spark?.id)}
                  >
                    <MenuItem onClick={e => e.stopPropagation()}>
                      <Type body2>Edit</Type>
                    </MenuItem>
                  </Link>
                  {isOwner && (
                    <Link
                      button
                      to={archiveSparkRoute(spark?.belongsTo?.name, spark?.id)}
                    >
                      <MenuItem onClick={e => e.stopPropagation()}>
                        <Type body2 color="red">
                          Archive
                        </Type>
                      </MenuItem>
                    </Link>
                  )}
                </MoreMenu>
              </div>
            </div>
          </div>
        </AccordionTrigger>
      </NavButton>
      <AccordionContent className={style.boards}>
        <Label
          className={style["space-label"]}
          right={
            <Tooltip position="top" label="New Space">
              <Link
                to={createBoardRoute(spark?.belongsTo?.name, spark?.id)}
                button
              >
                <IconButton color="grey">
                  <Plus />
                </IconButton>
              </Link>
            </Tooltip>
          }
        >
          Spaces
        </Label>
        {spark?.boards?.map((board, key) => (
          <NavButton
            key={board?.id || key}
            to={viewBoardRoute(spark?.belongsTo?.name, spark?.id, board?.id)}
            exact
          >
            <Type tag="div" body2>
              {board?.name}
            </Type>
          </NavButton>
        ))}
      </AccordionContent>
    </Accordion>
  );
};

const SparksNav = ({ sparks = [], organizations = [], className, ...rest }) => {
  const [org, setOrg] = useState(
    organizations?.find(organization => organization?.isUserOrganization)?.id
  );
  const [sparkList, setSparks] = useState(sparks);
  const { id } = useUser();
  useEffect(() => {
    setSparks(sparks.filter(spark => spark?.belongsTo?.id === org));
  }, [org, sparks]);
  const onOrgChange = orgId => {
    setOrg(orgId);
  };
  return (
    <div
      className={classNames(className, style.sparksnav)}
      data-testid="sparksnav"
      {...rest}
    >
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

      <NavButton
        to={createSparkRoute}
        exact
        path={createSparkRoute.pathname}
        className={style.newbtn}
      >
        <Signature>
          <Type body2 tag="div" color="primary">
            <Plus />
          </Type>

          <Type body2 tag="div" color="primary">
            <b>Create New Spark</b>
          </Type>
        </Signature>
      </NavButton>
      {sparkList?.map((spark, index) => {
        const isOwner = spark?.belongsTo?.owners?.find(
          person => person?.id === id
        );
        return (
          spark?.status !== "Deleted" && (
            <SparksNavButton
              spark={spark}
              key={spark?.id || index}
              isOwner={isOwner}
            />
          )
        );
      })}
    </div>
  );
};

SparksNavButton.propTypes = {
  spark: PropTypes.object,
  isOwner: PropTypes.bool
};

SparksNav.propTypes = {
  sparks: PropTypes.array,
  organizations: PropTypes.array,

  className: PropTypes.string
};

export { SparksNav };
