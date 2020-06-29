import PropTypes from "prop-types";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Dialog } from "../../components";
import { PostForm } from "../../forms";
import { createPostRoute, homeRoute } from "../../routes";

const NewPostDialog = ({ onSubmit, sparks = [] }) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog
      isShowing={location.pathname === createPostRoute.pathname}
      hide={hide}
    >
      <PostForm sparks={sparks} onSubmit={onSubmit} />
    </Dialog>
  );
};

NewPostDialog.propTypes = {
  onSubmit: PropTypes.func,
  sparks: PropTypes.array
};

export { NewPostDialog };
