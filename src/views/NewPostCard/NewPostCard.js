import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../components";
import { PostForm } from "../../forms";

const NewPostCard = ({ sparks, onSubmit }) => (
  <Card>
    <PostForm sparks={sparks} onSubmit={onSubmit} />
  </Card>
);

NewPostCard.propTypes = {
  sparks: PropTypes.array,
  onSubmit: PropTypes.func
};

export { NewPostCard };
