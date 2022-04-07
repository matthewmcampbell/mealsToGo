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

export const LoginScreen = ({ navigation }) => {
  [email, setEmail] = useState("");
  [password, setPassword] = useState("");
  [firstTry, setFirstTry] = useState(true);

  const { isAuthenticated, isLoading, err, onLogin } = useContext(
    AuthenticationContext
  );
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
                onPress={async () => {
                  if (email.length && password.length) {
                    onLogin(email, password, setFirstTry);
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
            {!firstTry && !isAuthenticated && err && (
              <Text variant="error">Whoops! Try again.</Text>
            )}
          </AccountContainer>
        </>
      )}
    </AccountBackgroundImage>
  );
};
