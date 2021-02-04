import PropTypes from "prop-types";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BoardForm } from "../../forms";
import { homeRoute } from "../../routes";
import { Dialog, Type } from "../../components";

const NewBoardDialog = ({ onSubmit, defaultValues = {} }) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog isShowing={location.pathname.includes("/create/board")} hide={hide}>
      <Type h4 align="center" gutterBottom>
        Create Space
      </Type>
      <BoardForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </Dialog>
  );
};

NewBoardDialog.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object
};

export { NewBoardDialog };
