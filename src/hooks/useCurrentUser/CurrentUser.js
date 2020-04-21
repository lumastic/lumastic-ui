import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import CurrentUserContext from "./CurrentUserContext";

const CurrentUser = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const contextValue = memo(
    () => ({
      currentUser,
      setCurrentUser
    }),
    [currentUser, setCurrentUser]
  );
  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUser.propTypes = {
  children: PropTypes.node
};

export { CurrentUser };
