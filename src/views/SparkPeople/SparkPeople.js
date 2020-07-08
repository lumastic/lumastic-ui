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
  Form,
  Type,
  Chip
} from "../../components";
import classNames from "../../helpers/classNames";
import { profileRoute } from "../../routes";
import { SearchSelect, Signature } from "../../templates";
import style from "./SparkPeople.scss";
import useModal from "../../hooks/useModal";

const SparkPeople = ({
  spark = {},
  className,
  isAdmin = false,
  onAddCollaborators,
  onSearchCollaborators
}) => {
  const [reset, toggle] = useModal();
  return (
    <Card className={classNames(className, style.sparkinfo)}>
      <List>
        <div>
          <Label>{`${spark.collaborators?.length} Collaborators`}</Label>

          {isAdmin && (
            <Form
              className={style.search}
              onSubmit={(data, e, rest) => {
                if (onAddCollaborators) {
                  onAddCollaborators(data, e, rest);
                } else {
                  alert(JSON.stringify(data));
                }
                toggle();
              }}
              defaultValues={{ collaborators: [] }}
            >
              <SearchSelect
                name="collaborators"
                placeholder="Add collaborators..."
                onSearch={onSearchCollaborators}
                renderResult={({ name, avatarURL }) => (
                  <Signature>
                    <Avatar src={avatarURL} size="small" />
                    <Type body2>{name}</Type>
                  </Signature>
                )}
                renderSelection={({ name, avatarURL, onRemove }) => (
                  <Chip
                    symbol={<Avatar src={avatarURL} size="small" />}
                    label={name}
                    onRemove={onRemove}
                  />
                )}
                reset={reset}
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
};

SparkPeople.propTypes = {
  spark: PropTypes.object,
  className: PropTypes.string,
  isAdmin: PropTypes.bool,
  onSearchCollaborators: PropTypes.func,
  onAddCollaborators: PropTypes.func
};

export { SparkPeople };
