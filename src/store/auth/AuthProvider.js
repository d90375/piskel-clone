import React, { useEffect, useState, createContext } from "react";

import baseApp from "../../utils/base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    baseApp.auth().onAuthStateChanged(setCurrentUser);

  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
