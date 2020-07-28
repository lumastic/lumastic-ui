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
  Signature,
  SparkSignature,
  OrgSignature
} from "../../templates";
import { Plus } from "../../icons";
import { createSparkRoute, createBoardRoute } from "../../routes";

const SparkNavBar = ({
  children,
  noContainer,
  org = {},
  spark = {},
  board = {},
  onBoardChange
}) => (
  <AppBar>
    <Container maxWidth={noContainer && "unset"}>
      <LeftPush hideRightOnTablet>
        <Breadcrumbs>
          <OrgSignature
            organization={org}
            user={org?.isUserOrganization && org}
            small
          />
          <SparkSignature spark={spark} small />
          <BoardSelect
            boards={spark?.boards}
            onChange={onBoardChange}
            defaultValue={board?.id}
            addOption={
              <Link to={createBoardRoute(org?.name, spark?.id)} button>
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
