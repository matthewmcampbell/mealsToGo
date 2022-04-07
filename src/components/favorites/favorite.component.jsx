import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { AntDesign } from "@expo/vector-icons";

const FavoriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);
  const Heart = () =>
    isFavorite ? (
      <AntDesign name={"heart"} size={24} color="red" />
    ) : (
      <AntDesign name={"hearto"} size={24} color="white" />
    );
  return (
    <FavoriteButton
      onPress={() => {
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant);
      }}
    >
      <Heart />
    </FavoriteButton>
  );
};
