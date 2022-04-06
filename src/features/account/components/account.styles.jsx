import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
const image = "../../../../assets/background.jpg";

export const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require(image),
  resizeMode: "cover",
  style: { width: "100%", height: "100%" },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const BackButton = styled(AuthButton)`
  width: 40%;

  align-self: center;
`;

export const Title = styled(Text)`
  font-size: 30px;
  padding-bottom: 450px;
  position: absolute;
  color: white;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
