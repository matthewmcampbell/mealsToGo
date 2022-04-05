import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
const RenderedImage = isAndroid ? CompactWebView : CompactImage;

export const CompactRestaurantInfo = ({ restaurant }) => {
  console.log(restaurant.photos[0]);
  return (
    <Item>
      <RenderedImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
