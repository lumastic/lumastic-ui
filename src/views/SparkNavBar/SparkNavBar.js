import PropTypes from "prop-types";
import React from "react";
import {
  AppBar,
  Breadcrumbs,
  Container,
  Link,
  MenuItem,
  Type
} from "../../components";
import { LeftPush } from "../../layouts";
import {
  BoardSelect,
  OrgSelect,
  SparkSelect,
  Signature
} from "../../templates";
import { Plus } from "../../icons";
import { createSparkRoute } from "../../routes";

const SparkNavBar = ({
  children,
  noContainer,
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
    <Container maxWidth={noContainer && "unset"}>
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
            addOption={
              <Link to={createSparkRoute} button>
                <MenuItem>
                  <Signature>
                    <Type body2>
                      <Plus />
                    </Type>
                    <Type body2>New Spark</Type>
                  </Signature>
                </MenuItem>
              </Link>
            }
            small
          />
          <BoardSelect
            boards={spark?.boards}
            onChange={onBoardChange}
            defaultValue={board?.id}
            addOption={
              <Link to={createSparkRoute} button>
                <MenuItem>
                  <Signature>
                    <Type body2>
                      <Plus />
                    </Type>
                    <Type body2>New Board</Type>
                  </Signature>
                </MenuItem>
              </Link>
            }
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
  noContainer: PropTypes.bool,
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
