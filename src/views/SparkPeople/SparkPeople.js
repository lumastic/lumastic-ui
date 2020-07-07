import PropTypes from "prop-types";
import React from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Label,
  Link,
  List,
  Tooltip,
  Form
} from "../../components";
import classNames from "../../helpers/classNames";
import { profileRoute } from "../../routes";
import { SearchSelect } from "../../templates";
import style from "./SparkPeople.scss";

const SparkPeople = ({
  spark = {},
  className,
  isAdmin = false,

  renderCollaboratorResult,
  renderCollaboratorSelection,
  onAddCollaborators,
  onSearchCollaborators
}) => (
  <Card className={classNames(className, style.sparkinfo)}>
    <List>
      <div>
        <Label>{`${spark.collaborators?.length} Collaborators`}</Label>

        {isAdmin && (
          <Form
            className={style.search}
            onSubmit={onAddCollaborators}
            defaultValues={{ collaborators: [] }}
          >
            <SearchSelect
              name="collaborators"
              placeholder="Add collaborators..."
              onSearch={onSearchCollaborators}
              renderResult={renderCollaboratorResult}
              renderSelection={renderCollaboratorSelection}
            />
            <Button size="small" variant="contained" type="submit">
              Add
            </Button>
          </Form>
        )}
        <AvatarGroup>
          {spark.collaborators?.map((collaborator, index) => (
            <Tooltip
              label={collaborator.name}
              position="top"
              key={collaborator.id || index}
            >
              <Link to={profileRoute(collaborator.username)} inline>
                <Avatar src={collaborator.avatarURL} />
              </Link>
            </Tooltip>
          ))}
        </AvatarGroup>
      </div>
      <div>
        <Label>{`${spark.followers?.length || 0} Followers`}</Label>

        <AvatarGroup>
          {spark.followers?.map((follower, index) => (
            <Tooltip
              label={follower.name}
              position="top"
              key={follower.id || index}
            >
              <Link to={profileRoute(follower.username)} inline>
                <Avatar src={follower.avatarURL} key={follower.id} />
              </Link>
            </Tooltip>
          ))}
        </AvatarGroup>
      </div>
    </List>
  </Card>
);

SparkPeople.propTypes = {
  spark: PropTypes.object,
  className: PropTypes.string,
  isAdmin: PropTypes.bool,
  renderCollaboratorResult: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  renderCollaboratorSelection: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  onSearchCollaborators: PropTypes.func,
  onAddCollaborators: PropTypes.func
};

export { SparkPeople };
