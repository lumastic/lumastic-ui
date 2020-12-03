import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Card,
  IconButton,
  Label,
  List,
  Link,
  Type
} from "../../components";
import { Signature } from "../../templates";
import { Plus } from "../../icons";
import style from "./WhoToFollow.scss";
import { profileRoute } from "../../routes";

const WhoToFollow = ({
  users = [], // Users is actually an array of Orgs
  followHandler = id => alert("Followed", id)
}) => (
  <Card>
    <List>
      <Label>Who TO Follow</Label>

      {users.map((user, index) => (
        <div className={style.wrapper} key={user?.id || index}>
          <Link to={profileRoute(user?.name)}>
            <Signature>
              <Avatar src={user?.avatarURL} size="big" />
              <div>
                <Type body2>{user?.displayName || user?.name}</Type>
                <Type color="grey" setSize="0.7rem">
                  @{user?.name}
                </Type>
              </div>
            </Signature>
          </Link>
          <IconButton color="primary" onClick={() => followHandler(user?.id)}>
            <Plus />
          </IconButton>
        </div>
      ))}
    </List>
  </Card>
);

WhoToFollow.propTypes = {
  users: PropTypes.array,
  followHandler: PropTypes.func
};

export { WhoToFollow };
