"use client";
import { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider
export const AuthProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(true);
  const [authUser, setauthUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{ isLogin, setisLogin, authUser, setauthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
