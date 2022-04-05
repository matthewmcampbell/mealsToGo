import styled from "styled-components/native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;
