import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { user } = useContext(AuthenticationContext);
  console.log(user);
  return (
    <View>
      {user ? (
        <AppNavigator />
      ) : (
        <View>
          <Text>Not Auth</Text>
        </View>
      )}
    </View>
  );
};
