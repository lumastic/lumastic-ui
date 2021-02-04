import React from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import { OrgForm } from "../../forms";
import { Dialog, Type } from "../../components";
import { homeRoute } from "../../routes";

const OrgDialog = ({
  onSubmit,
  organization,
  title = "",
  isShowing = false
}) => {
  const history = useHistory();
  const location = useLocation();
  const hide = () => {
    history.push(location.state?.from || homeRoute);
  };
  return (
    <Dialog isShowing={isShowing} hide={hide}>
      <Type h3 align="center" gutterBottom>
        {title}
      </Type>
      <OrgForm
        onSubmit={onSubmit}
        validate
        defaultValues={
          organization && {
            name: organization?.name,
            bio: organization?.bio
          }
        }
      />
    </Dialog>
  );
};

OrgDialog.propTypes = {
  onSubmit: PropTypes.func,
  organization: PropTypes.object,
  title: PropTypes.string,
  isShowing: PropTypes.bool
};

export { OrgDialog };
