import PropTypes from "prop-types";
import React from "react";
import { AppBar, Breadcrumbs, Container } from "../../components";
import { LeftPush } from "../../layouts";
import { BoardSelect, OrgSelect, SparkSelect } from "../../templates";

const SparkNavBar = ({
  children,
  organizations = [],
  org = {},
  sparks = [],
  spark = {},
  board = {},
  onOrgChange,
  onSparkChange,
  onBoardChange
}) => (
  <AppBar>
    <Container>
      <LeftPush hideRightOnTablet>
        <Breadcrumbs>
          <OrgSelect
            organizations={organizations}
            onChange={onOrgChange}
            defaultValue={org?.id}
            avatarsOnly
          />
          <SparkSelect
            sparks={sparks?.filter(s => s?.belongsTo.id === org.id)}
            onChange={onSparkChange}
            defaultValue={spark?.id}
            small
          />
          <BoardSelect
            boards={spark?.boards}
            onChange={onBoardChange}
            defaultValue={board?.id}
            small
          />
        </Breadcrumbs>
        <div>{children}</div>
      </LeftPush>
    </Container>
  </AppBar>
);

SparkNavBar.propTypes = {
  children: PropTypes.node,
  organizations: PropTypes.array,
  org: PropTypes.object,
  sparks: PropTypes.array,
  spark: PropTypes.object,
  board: PropTypes.object,
  onOrgChange: PropTypes.func,
  onSparkChange: PropTypes.func,
  onBoardChange: PropTypes.func
};

export { SparkNavBar };
