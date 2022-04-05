import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  /* padding: ${(props) => props.theme.space[3]}; */
  background-color: ${(props) => props.theme.colors.bg.secondary};
  /* flex: 1; */
`;

export const RestaurantListWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
