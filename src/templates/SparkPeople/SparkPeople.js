import React from "react";
import PropTypes from "prop-types";
import style from "./SparkPeople.scss";
import classNames from "../../helpers/classNames";
import { Card } from "../../components/Card";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { Avatar } from "../../components/Avatar";
import { AvatarGroup } from "../../components/AvatarGroup";
import { Tooltip } from "../../components/Tooltip";
import withLink from "../../helpers/router/withLink";

const SparkPeople = ({ spark = {}, className, collabAction, followAction }) => (
  <Card className={classNames(className, style.sparkinfo)}>
    <List>
      <div>
        <Label>{`${spark.collaborators.length} Collaborators`}</Label>
        <div className={style.actionrow}>
          <div className={style.left}>
            <AvatarGroup>
              {spark.collaborators.map(collaborator => (
                <Tooltip label={collaborator.name} position="top">
                  {withLink(
                    <Avatar
                      src={collaborator.avatarURL}
                      key={collaborator.id}
                    />,
                    { to: "#!" }
                  )}
                </Tooltip>
              ))}
            </AvatarGroup>
          </div>
          <div className={style.right}>{collabAction}</div>
        </div>
      </div>
      <div>
        <Label>{`${spark.followers.length} Followers`}</Label>
        <div className={style.actionrow}>
          <div className={style.left}>
            <AvatarGroup>
              {spark.followers.map(follower => (
                <Tooltip label={follower.name} position="top">
                  {withLink(
                    <Avatar src={follower.avatarURL} key={follower.id} />,
                    { to: "#!" }
                  )}
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
