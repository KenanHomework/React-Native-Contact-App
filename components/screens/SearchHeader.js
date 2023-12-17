import React, { useContext } from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";

const SearchHeader = ({ handleSearch }) => {
  const navigation = useContext(NavigationContext);

  return (
    <View
      style={{
        width: "100%",
        display: "fex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Back Button */}
      <Ionicons
        name="arrow-back"
        size={24}
        color="#fff"
        style={{
          width: 30,
        }}
        onPress={() => navigation.goBack()}
      />

      <TextInput
        style={{
          color: "#fff",
          fontSize: 20,
        }}
        placeholder={"Search"}
        placeholderTextColor={"#fff"}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchHeader;
