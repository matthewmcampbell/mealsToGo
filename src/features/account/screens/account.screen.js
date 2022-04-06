import React from "react";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackgroundImage,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackgroundImage>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop={false}
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="medium" position="bottom" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackgroundImage>
  );
};
