import React, { useContext, useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeContainer } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { CenteredSpinner } from "../../../components/utils/spinner";
import { RestaurantListWrapper } from "./restaurants.styles";
import { RestaurantList } from "../components/restaurant-list.component";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { Pressable } from "react-native";
import { FadeInView } from "../../../components/animations/fade.animation";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeContainer>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantListWrapper>
        {isLoading ? (
          <CenteredSpinner />
        ) : (
          <FadeInView>
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
          </FadeInView>
        )}
      </RestaurantListWrapper>
    </SafeContainer>
  );
};
