import React, { useState, createContext, useEffect } from "react";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    console.log("a");
    loginRequest(email, password)
      .then((u) => {
        console.log("b");
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("c");
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const loginFunc = async () => {
      console.log("d");
      const login = await onLogin("j@email.com", "test123");
      console.log("e");
      console.log(login);
    };
    loginFunc();
  }, []);
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
