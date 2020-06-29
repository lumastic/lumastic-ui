import React from "react";
import PropTypes from "prop-types";
import { Card, Point } from "../../components";
import { PostForm } from "../../forms";
import style from "./NewPostCard.scss";
import classNames from "../../helpers/classNames";

const NewPostCard = ({ sparks, onSubmit }) => (
  <div className={style.container}>
    <Point className={style.point} withBorder color="light" />
    <Card>
      <PostForm sparks={sparks} onSubmit={onSubmit} />
    </Card>
  </div>
);

NewPostCard.propTypes = {
  sparks: PropTypes.array,
  onSubmit: PropTypes.func
};

export { NewPostCard };
