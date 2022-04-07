import React, { useState, createContext, useEffect } from "react";
import { loginRequest, makeAccount } from "./authentication.service";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [err, setError] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    }
  });

  const onLogin = async (email, password, setFirstTry) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setFirstTry(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
        setFirstTry(false);
      });
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (!email.length || !password.length || password !== repeatedPassword) {
      return;
    }
    setIsLoading(true);
    makeAccount(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setFirstTry(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
        setFirstTry(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        err,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
