import PropTypes from "prop-types";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Dialog, Type } from "../../components";
import { PostForm } from "../../forms";
import { createPostRoute } from "../../routes";

const NewPostDialog = ({ onSubmit, sparks = [] }) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.goBack();
  };
  return (
    <Dialog isShowing={location.pathname === createPostRoute} hide={hide}>
      <PostForm sparks={sparks} onSubmit={onSubmit} />
    </Dialog>
  );
};

NewPostDialog.propTypes = {
  onSubmit: PropTypes.func,
  sparks: PropTypes.array
};

export { NewPostDialog };
