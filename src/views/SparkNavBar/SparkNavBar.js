import PropTypes from "prop-types";
import React from "react";
import { AppBar, Breadcrumbs, Container } from "../../components";
import { LeftPush } from "../../layouts";
import { BoardSelect, OrgSelect, SparkSelect } from "../../templates";

const SparkNavBar = ({
  organizations = [],
  org = {},
  sparks = [],
  spark = {},
  board = {},
  orgChange,
  sparkChange,
  boardChange
}) => (
  <AppBar>
    <Container>
      <LeftPush hideRightOnTablet>
        <Breadcrumbs>
          <OrgSelect
            organizations={organizations}
            onChange={orgChange}
            defaultValue={org.id}
            avatarsOnly
          />
          <SparkSelect
            sparks={sparks?.filter(s => s.belongsTo.id === org.id)}
            onChange={sparkChange}
            defaultValue={spark.id}
          />
          <BoardSelect
            boards={spark?.boards}
            onChange={boardChange}
            defaultValue={board.id}
          />
        </Breadcrumbs>
        <div>Test</div>
      </LeftPush>
    </Container>
  </AppBar>
);

SparkNavBar.propTypes = {
  organizations: PropTypes.array,
  org: PropTypes.object,
  sparks: PropTypes.array,
  spark: PropTypes.object,
  board: PropTypes.object,
  orgChange: PropTypes.func,
  sparkChange: PropTypes.func,
  boardChange: PropTypes.func
};

export { SparkNavBar };
