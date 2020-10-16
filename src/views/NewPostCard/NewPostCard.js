import React from "react";
import { Avatar, Card, Link, Type } from "../../components";
import { useUser } from "../../hooks";
import { createPostRoute } from "../../routes";
import { Signature } from "../../templates";
import style from "./NewPostCard.scss";

const NewPostCard = () => {
  const { avatarURL, name } = useUser();
  return (
    <Link button to={createPostRoute}>
      <Card className={style.card}>
        <Signature>
          <Avatar src={avatarURL} size="big" />
          <div className={style.bubble}>
            <Type color="grey">What's the latest, {name.split(" ")[0]}?</Type>
          </div>
        </Signature>
      </Card>
    </Link>
  );
};

NewPostCard.propTypes = {};

export { NewPostCard };
