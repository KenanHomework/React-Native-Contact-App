import React, { useContext } from "react";
import { Text, View } from "react-native";
import SearchButton from "../SearchButton";
import { NavigationContext } from "@react-navigation/native";

const KeyboardHeader = () => {
  const navigation = useContext(NavigationContext);

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      >
        Phone
      </Text>

      <SearchButton navigation={navigation} />
    </View>
  );
};

export default KeyboardHeader;
