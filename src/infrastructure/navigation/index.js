import { AppNavigator } from "./app.navigator";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { user } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
