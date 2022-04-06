import React, { useState, createContext, useEffect } from "react";
import { loginRequest, makeAccount } from "./authentication.service";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsLoading(false);
  });

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      let loginUser = await loginRequest(email, password);
      setUser(loginUser);
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (!email.length || !password.length || password !== repeatedPassword) {
      return;
    }
    setIsLoading(true);
    try {
      let registerUser = await makeAccount(email, password);
      setUser(registerUser);
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    const loginFunc = async () => {
      onLogin("j@email.com", "test13");
    };
    loginFunc();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
