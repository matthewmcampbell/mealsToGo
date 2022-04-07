import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import { RestaurantsContextProvider } from "../../../src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../../src/services/location/location.context";
import { FavoritesContextProvider } from "../../../src/services/favorites/favorites.context";

const Tab = createBottomTabNavigator();

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
            <Tab.Screen
              name="Settings"
              component={SettingsNavigator}
            ></Tab.Screen>
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
