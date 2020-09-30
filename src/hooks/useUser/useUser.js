import PropTypes from "prop-types";
import React, { createContext, useContext, useReducer } from "react";

const UserGlobalContext = createContext({});

const UserProvider = ({ children, ...rest }) => {
  const [user, updateUser] = useReducer(
    (state, action) => ({ ...state, ...action.payload }),
    { ...rest }
  );
  return (
    <UserGlobalContext.Provider value={{ ...user, updateUser }}>
      {children}
    </UserGlobalContext.Provider>
  );
};

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
