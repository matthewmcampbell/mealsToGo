import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

const saveFavorites = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@favorites", jsonValue);
  } catch (e) {
    console.log("Error saving favorites to cache: ", e);
  }
};

const loadFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favorites");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error loading cached favorites: ", e);
  }
};

export const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter((existingRestaurant) => {
      return existingRestaurant.placeId !== restaurant.placeId;
    });
    setFavorites(newFavorites);
  };

  useEffect(() => {
    const loadFavoritesAsync = async () => {
      loadFavorites();
    };
    loadFavoritesAsync();
  }, []);

  useEffect(() => {
    const saveFavoritesAsync = async () => {
      saveFavorites(favorites);
    };
    saveFavoritesAsync();
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
