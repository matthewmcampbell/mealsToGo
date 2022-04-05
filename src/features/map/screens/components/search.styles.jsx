import styled from "styled-components/native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  position: absolute;
  z-index: 999;
  top: 80px;
  width: 90%;
  align-self: center;
`;
