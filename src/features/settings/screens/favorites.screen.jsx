import React, { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeContainer } from "../../../components/utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurant-list.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Pressable } from "react-native";

const NoFavoritesArea = styled(SafeContainer)`
  align-items: center;
  justify-content: center;
`;
export const FavortiesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeContainer>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeContainer>
  ) : (
    <NoFavoritesArea>
      <Text center> No favorites yet!</Text>
    </NoFavoritesArea>
  );
};
