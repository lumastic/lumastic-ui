import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

const UserGlobalContext = createContext({});

const UserProvider = ({ children, ...rest }) => (
  <UserGlobalContext.Provider value={{ ...rest }}>
    {children}
  </UserGlobalContext.Provider>
);

UserProvider.propTypes = {
  children: PropTypes.node
};

export const useUser = () => {
  const context = useContext(UserGlobalContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider };
