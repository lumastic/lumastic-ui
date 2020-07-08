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
  isShowing = false
}) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog isShowing={isShowing} hide={hide}>
      <Type h2 align="center" gutterBottom>
        {title}
      </Type>
      <SparkForm
        onSubmit={onSubmit}
        organizations={organizations}
        license={license}
        defaultValues={
          spark && {
            title: spark?.title,
            description: spark?.description,
            visibility: spark?.visibility
          }
        }
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
  isShowing: PropTypes.bool
};

export { SparkDialog };
