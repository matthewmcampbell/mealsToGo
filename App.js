import React, { useState, useEffect } from "react";

import { Fragment } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useDancing,
  DancingScript_400Regular,
} from "@expo-google-fonts/dancing-script";

import { theme } from "./src/infrastructure/theme/";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5dwvz3XmWorKttJpdMfSe1L_bsMfpyW4",
  authDomain: "mealstogo-25013.firebaseapp.com",
  projectId: "mealstogo-25013",
  storageBucket: "mealstogo-25013.appspot.com",
  messagingSenderId: "211228773486",
  appId: "1:211228773486:web:f2b542a660ffd8e0dc2a7f",
};

// Initialize Firebase
app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [dancingLoaded] = useDancing({
    DancingScript_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !dancingLoaded) {
    return null;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar />
    </Fragment>
  );
}
