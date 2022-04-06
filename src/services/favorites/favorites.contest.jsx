import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
export const FavoritesContext = createContext();

const saveFavorites = async (value, uid) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
  } catch (e) {
    console.log("Error saving favorites to cache: ", e);
  }
};

const loadFavorites = async (uid) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@favorites-${uid}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error loading cached favorites: ", e);
  }
};

export const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthenticationContext);

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
      if (user) {
        loadFavorites(user.uid);
      }
    };
    loadFavoritesAsync();
  }, [user]);

  useEffect(() => {
    const saveFavoritesAsync = async () => {
      if (user) {
        saveFavorites(favorites, user.uid);
      }
    };
    saveFavoritesAsync();
  }, [favorites, user]);

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
