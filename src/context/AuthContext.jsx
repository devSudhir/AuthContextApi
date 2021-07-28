import { createContext, useState } from "react";

export const AuthContext = createContext({
  status: false
});

export const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const handleStatus = (value) => {
    setStatus(value);
  };
  const value = { status, handleStatus };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
