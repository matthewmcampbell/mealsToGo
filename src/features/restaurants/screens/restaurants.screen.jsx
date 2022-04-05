import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeContainer } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { CenteredSpinner } from "../../../components/utils/spinner";
import { RestaurantListWrapper, RestaurantList } from "./restaurants.styles";
import { Search } from "../components/search.component";
import { Pressable } from "react-native";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(restaurants[0]);
  return (
    <SafeContainer>
      <Search />
      <RestaurantListWrapper>
        {isLoading ? (
          <CenteredSpinner />
        ) : (
          <RestaurantList
            data={restaurants}
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
        )}
      </RestaurantListWrapper>
    </SafeContainer>
  );
};
