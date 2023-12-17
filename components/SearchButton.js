import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

export default function SearchButton() {
  const navigation = useContext(NavigationContext);

  return (
    <Feather.Button
      name="search"
      size={24}
      color="#fff"
      backgroundColor={"transparent"}
      onPress={() => navigation.navigate("Search")}
    />
  );
}
