import React from "react";
import PropTypes from "prop-types";
import { Avatar, Card, IconButton, Label, List, Type } from "../../components";
import { Signature } from "../../templates";
import { Plus } from "../../icons";
import style from "./WhoToFollow.scss";

const WhoToFollow = ({
  users = [],
  followHandler = id => alert("Followed", id)
}) => (
  <Card>
    <List>
      <Label>Who TO Follow</Label>
      {users.map((user, index) => (
        <div className={style.wrapper} key={user?.id || index}>
          <Signature>
            <Avatar src={user?.avatarURL} size="big" />
            <div>
              <Type body2>{user?.name}</Type>
              <Type color="grey" setSize="0.7rem">
                @{user?.username}
              </Type>
            </div>
          </Signature>
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