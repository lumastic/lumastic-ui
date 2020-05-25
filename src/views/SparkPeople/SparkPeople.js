import PropTypes from "prop-types";
import React from "react";
import {
  Avatar,
  AvatarGroup,
  Card,
  Label,
  Link,
  List,
  Tooltip
} from "../../components";
import classNames from "../../helpers/classNames";
import style from "./SparkPeople.scss";
import { profileRoute } from "../../routes";

const SparkPeople = ({ spark = {}, className, collabAction, followAction }) => (
  <Card className={classNames(className, style.sparkinfo)}>
    <List>
      <div>
        <Label>{`${spark.collaborators?.length} Collaborators`}</Label>
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
          <div className={style.right}>{collabAction}</div>
        </div>
      </div>
      <div>
        <Label>{`${spark.followers?.length} Followers`}</Label>
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
          <div className={style.right}>{followAction}</div>
        </div>
      </div>
    </List>
  </Card>
);

SparkPeople.propTypes = {
  spark: PropTypes.object,
  className: PropTypes.string,
  collabAction: PropTypes.node,
  followAction: PropTypes.node
};

export { SparkPeople };
