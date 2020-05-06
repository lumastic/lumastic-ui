import PropTypes from "prop-types";
import React, { memo } from "react";
import CurrentUserContext from "./CurrentUserContext";

const UserContext = ({ children, values }) => {
  const contextValue = memo(() => values, [values]);
  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.node,
  values: PropTypes.object
};

export { UserContext };
