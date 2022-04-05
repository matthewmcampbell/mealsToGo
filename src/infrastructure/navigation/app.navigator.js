import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeContainer } from "../../components/utils/safe-area.component";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <SafeContainer>
      <View>
        <Text>I am the settings screen.</Text>
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
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
        ></Tab.Screen>
        <Tab.Screen name="Map" component={MapScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
