import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

export default function SearchBar({ handleChange }) {
  const [isActive, setIsActive] = useState(false);

  const changeState = () => setIsActive((prev) => !prev);

  useEffect(() => {
    handleChange("");
  }, [isActive]);

  return isActive ? (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 0,
      }}
    >
      <Ionicons.Button
        onPress={changeState}
        backgroundColor={"transparent"}
        name="arrow-back-sharp"
        size={24}
        color="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleChange}
        color={"#fff"}
        placeholderTextColor={"#717171"}
      />
    </View>
  ) : (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        padding: 0,
      }}
    >
      <MaterialCommunityIcons name="plus" size={26} color="#fff" />
      <Feather.Button
        name="search"
        size={24}
        color="#fff"
        backgroundColor={"transparent"}
        onPress={changeState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#393e40",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
});
