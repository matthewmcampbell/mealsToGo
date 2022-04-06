import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.sceen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TabIcons[route.name]} color={color} size={size} />;
  },
});

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Main" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
