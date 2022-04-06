import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInput } from "react-native-paper";
import { CenteredSpinner } from "../../../components/utils/spinner";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackgroundImage,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  BackButton,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  [email, setEmail] = useState("");
  [password, setPassword] = useState("");
  [firstTry, setFirstTry] = useState(true);

  const { isAuthenticated, isLoading, error, onLogin } = useContext(
    AuthenticationContext
  );
  console.log(error);
  return (
    <AccountBackgroundImage>
      <AccountCover />
      {isLoading ? (
        <CenteredSpinner />
      ) : (
        <>
          <Title>Meals To Go</Title>
          <AccountContainer>
            <AuthInput
              label="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Spacer size="medium" position="bottom">
              <AuthInput
                label="Password"
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
            </Spacer>
            <Spacer size="large" position="bottom">
              <AuthButton
                icon="lock-open"
                mode="contained"
                onPress={() => {
                  if (email.length && password.length) {
                    setFirstTry(false);
                    onLogin(email, password);
                    setPassword("");
                  }
                }}
              >
                Login
              </AuthButton>
            </Spacer>
            <BackButton mode="contained" onPress={() => navigation.goBack()}>
              Back
            </BackButton>
            {!firstTry && <Text variant="error">Whoops! Try again.</Text>}
          </AccountContainer>
        </>
      )}
    </AccountBackgroundImage>
  );
};
