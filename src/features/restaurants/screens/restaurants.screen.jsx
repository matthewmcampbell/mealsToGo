import { StatusBar } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.error};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;
const ListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeContainer>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={() => console.log("hello")}
        />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard></RestaurantInfoCard>
      </ListContainer>
    </SafeContainer>
  );
};
