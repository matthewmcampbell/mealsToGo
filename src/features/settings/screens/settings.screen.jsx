import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeContainer } from "../../../components/utils/safe-area.component";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../../infrastructure/theme/colors";

const image = "../../../../assets/background.png";

export const SettingsBackground = styled.ImageBackground.attrs({
  source: require(image),
  resizeMode: "cover",
  style: { width: "100%", height: "100%" },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SettingsCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`;

const TransparentSafeContainer = styled(SafeContainer)`
  background-color: transparent;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState("../../../../assets/demo_profile.png");

  const getProfilePicture = async (usr) => {
    const photoUri = await AsyncStorage.getItem(`${usr.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(() => {
    getProfilePicture(user);
  });
  return (
    <SettingsBackground>
      <SettingsCover />
      <TransparentSafeContainer>
        <AvatarContainer>
          <Spacer position="top" size="large">
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              {photo ? (
                <Avatar.Image size={180} source={photo} />
              ) : (
                <Avatar.Icon
                  size={180}
                  icon="human"
                  backgroundColor={colors.brand.primary}
                />
              )}
            </TouchableOpacity>
          </Spacer>
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart-outline" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
          <Spacer size="medium" position="top" />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color="black" icon="logout" />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeContainer>
    </SettingsBackground>
  );
};
