import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
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

export const RegisterScreen = ({ navigation }) => {
  [email, setEmail] = useState("");
  [password, setPassword] = useState("");
  [repeatedPassword, setRepeatedPassword] = useState("");
  [firstTry, setFirstTry] = useState(true);

  const { isLoading, onRegister } = useContext(AuthenticationContext);
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
            <AuthInput
              label="Password"
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
            <Spacer size="large" position="bottom">
              <AuthInput
                label="Repeat Password"
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                value={repeatedPassword}
                onChangeText={setRepeatedPassword}
              />
            </Spacer>
            <Spacer size="large" position="bottom">
              <AuthButton
                icon="email"
                mode="contained"
                onPress={() => {
                  if (email.length && password.length) {
                    setFirstTry(false);
                    onRegister(email, password, repeatedPassword);
                    setPassword("");
                    setRepeatedPassword("");
                  }
                }}
              >
                Register
              </AuthButton>
            </Spacer>
            <BackButton mode="contained" onPress={() => navigation.goBack()}>
              Back
            </BackButton>
            {!firstTry && (
              <Text variant="error">Whoops! Something went wrong.</Text>
            )}
          </AccountContainer>
        </>
      )}
    </AccountBackgroundImage>
  );
};
