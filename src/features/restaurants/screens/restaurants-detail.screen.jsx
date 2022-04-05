import React from "react";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ScrollView } from "react-native";
import {
  SafeContainer,
  SafeContainerDetails,
} from "../../../components/utils/safe-area.component";

const AccordionSettings = [
  {
    meal: "Breakfast",
    icon: "bread-slice",
    id: 1,
    menu: ["Eggs Benedict", "Steak & Eggs", "Orange Juice", "Rye Toast"],
  },
  {
    meal: "Lunch",
    icon: "hamburger",
    id: 2,
    menu: ["Cheeseburger", "French Fries", "Vanilla Milkshake"],
  },
  {
    meal: "Dinner",
    icon: "glass-cocktail",
    id: 3,
    menu: ["Rib-eye Steak", "Garden Salad", "Salmon", "Duck"],
  },
  {
    meal: "Dessert",
    icon: "cupcake",
    id: 4,
    menu: ["Chocolate Cake", "Ice Cream", "Chocolate Chip Cookie"],
  },
];

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const { name } = restaurant;
  return (
    <SafeContainerDetails>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.AccordionGroup>
          {AccordionSettings.map(({ meal, icon, id, menu }) => {
            return (
              <List.Accordion
                key={`${name}-${meal}-${id}`}
                title={meal}
                id={id}
                left={() => <List.Icon icon={icon} />}
              >
                {menu.map((item) => (
                  <List.Item
                    key={`${name}-${meal}-${item}-${id}`}
                    title={item}
                  />
                ))}
              </List.Accordion>
            );
          })}
        </List.AccordionGroup>
      </ScrollView>
    </SafeContainerDetails>
  );
};
