import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeContainer } from "../../components/utils/safe-area.component";
import { View, Text, Button } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantsContextProvider } from "../../../src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../../src/services/location/location.context";
import { FavoritesContextProvider } from "../../../src/services/favorites/favorites.contest";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeContainer>
      <View>
        <Text>I am the settings screen.</Text>
        <Button title="logout" onPress={onLogout}></Button>
      </View>
    </SafeContainer>
  );
};

const TabIcons = {
  Restaurants: "restaurant",
  Map: "earth",
  Settings: "settings",
};

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TabIcons[route.name]} color={color} size={size} />;
  },
});
export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsNavigator}
            ></Tab.Screen>
            <Tab.Screen name="Map" component={MapScreen}></Tab.Screen>
            <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
