import PropTypes from "prop-types";
import React from "react";
import {
  Avatar,
  AvatarGroup,
  Card,
  IconButton,
  Label,
  Link,
  List,
  Tooltip,
  Button
} from "../../components";
import classNames from "../../helpers/classNames";
import { Gear } from "../../icons";
import { profileRoute } from "../../routes";
import style from "./SparkPeople.scss";

const SparkPeople = ({ spark = {}, className, isAdmin = false }) => (
  <Card className={classNames(className, style.sparkinfo)}>
    <List>
      <div>
        <Label
          right={
            isAdmin && (
              <Link button>
                <IconButton color="grey">
                  <Gear />
                </IconButton>
              </Link>
            )
          }
        >{`${spark.collaborators?.length} Collaborators`}</Label>
        <div className={style.actionrow}>
          <div className={style.left}>
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
        </div>
      </div>
      <div>
        <Label>{`${spark.followers?.length || 0} Followers`}</Label>
        <div className={style.actionrow}>
          <div className={style.left}>
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
        </div>
      </div>
    </List>
  </Card>
);

SparkPeople.propTypes = {
  spark: PropTypes.object,
  className: PropTypes.string,
  isAdmin: PropTypes.bool
};

export { SparkPeople };
