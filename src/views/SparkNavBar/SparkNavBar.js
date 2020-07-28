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
import { Plus } from "../../icons";
import { LeftPush } from "../../layouts";
import { createBoardRoute, viewSparkRoute } from "../../routes";
import { BoardSelect, OrgSignature, Signature } from "../../templates";

const SparkNavBar = ({
  children,
  noContainer,
  spark = {},
  board = {},
  onBoardChange
}) => (
  <AppBar>
    <Container maxWidth={noContainer && "unset"}>
      <LeftPush hideRightOnTablet>
        <Breadcrumbs>
          <OrgSignature
            organization={spark?.belongsTo}
            user={spark?.belongsTo?.isUserOrganization && spark?.belongsTo}
            small
          />
          <Link inline to={viewSparkRoute(spark?.belongsTo?.name, spark?.id)}>
            <Type body2>{spark.title}</Type>
          </Link>
          <BoardSelect
            boards={spark?.boards}
            onChange={onBoardChange}
            defaultValue={board?.id}
            addOption={
              <Link
                to={createBoardRoute(spark?.belongsTo?.name, spark?.id)}
                button
              >
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
  spark: PropTypes.object,
  board: PropTypes.object,
  onBoardChange: PropTypes.func
};

export { SparkNavBar };
