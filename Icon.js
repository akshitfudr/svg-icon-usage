import React from "react";
import { View } from "react-native";
import { SvgUri } from "react-native-svg";
import Sprite from "./src/icons/icons-sprite.svg";

const Icon = ({ top, bottom, left, right }) => {
  return (
    <View
      style={{
        display: "flex",
        maxHeight: 25,
        maxWidth: 25,
        overflow: "hidden",
      }}
    >
      <SvgUri
        uri={
          "https://devassets.fudr.in/brand/freddiestg/Freddies-Sprite-min.svg"
        }
        style={{
          position: "relative",
          //   right: 100,
          bottom: 45,
        }}
      />
      {/* bottom: to pick icons down | the sprite */}
      {/* right: to pick icons right -- the sprite */}
    </View>
  );
};

export const LocalIcon = ({}) => {
  return (
    <View
      style={{
        display: "flex",
        maxHeight: 25,
        maxWidth: 25,
        overflow: "hidden",
      }}
    >
      <View style={{ position: "relative", right: 25, bottom :45 }}>
        <Sprite />
      </View>
    </View>
  );
};

export default Icon;
