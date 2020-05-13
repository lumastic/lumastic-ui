import PropTypes from "prop-types";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Dialog, Type } from "../../components";
import { SparkForm } from "../../forms";
import { createSparkRoute, homeRoute } from "../../routes";

const NewSparkDialog = ({ onSubmit, organizations, license }) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog
      isShowing={location.pathname === createSparkRoute.pathname}
      hide={hide}
    >
      <Type h2 align="center" gutterBottom>
        Create Spark
      </Type>
      <SparkForm
        onSubmit={onSubmit}
        organizations={organizations}
        license={license}
      />
    </Dialog>
  );
};

NewSparkDialog.propTypes = {
  onSubmit: PropTypes.func,
  organizations: PropTypes.array,
  license: PropTypes.bool
};

export { NewSparkDialog };
