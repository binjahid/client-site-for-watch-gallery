import React from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const allValues = useFirebase();
  console.log(useFirebase);

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
