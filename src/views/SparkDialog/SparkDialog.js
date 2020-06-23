import PropTypes from "prop-types";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Dialog, Type } from "../../components";
import { SparkForm } from "../../forms";
import { homeRoute } from "../../routes";

const SparkDialog = ({
  onSubmit,
  organizations,
  license,
  title = "",
  spark = {},
  showingPathname
}) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog isShowing={location.pathname === showingPathname} hide={hide}>
      <Type h2 align="center" gutterBottom>
        {title}
      </Type>
      <SparkForm
        onSubmit={onSubmit}
        organizations={organizations}
        license={license}
        defaultValues={spark}
      />
    </Dialog>
  );
};

SparkDialog.propTypes = {
  onSubmit: PropTypes.func,
  organizations: PropTypes.array,
  license: PropTypes.bool,
  spark: PropTypes.object,
  title: PropTypes.string,
  showingPathname: PropTypes.string
};

export { SparkDialog };
