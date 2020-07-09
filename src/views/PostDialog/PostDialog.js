import PropTypes from "prop-types";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Dialog } from "../../components";
import { PostForm } from "../../forms";
import { homeRoute } from "../../routes";

const PostDialog = ({
  onSubmit,
  sparks = [],
  buttonLabel,
  defaultValues,
  isShowing
}) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog isShowing={isShowing} hide={hide}>
      <PostForm
        sparks={sparks}
        onSubmit={onSubmit}
        buttonLabel={buttonLabel}
        defaultValues={defaultValues}
      />
    </Dialog>
  );
};

PostDialog.propTypes = {
  onSubmit: PropTypes.func,
  sparks: PropTypes.array,
  buttonLabel: PropTypes.string,
  defaultValues: PropTypes.object,
  isShowing: PropTypes.bool
};

export { PostDialog };
