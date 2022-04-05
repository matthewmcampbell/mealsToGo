import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import { theme } from "../../infrastructure/theme";

export const Spinner = () => (
  <ActivityIndicator
    animating={true}
    color={theme.colors.brand.primary}
    size="large"
  />
);

export const CenteredSpinner = styled(Spinner)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
