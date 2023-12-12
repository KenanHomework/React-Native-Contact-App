import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmptyList() {
  return (
    <View
      style={{
        marginTop: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <MaterialIcons name="search-off" size={30} color="white" />
      <Text style={{ color: "#fff", fontSize: 18 }}>No contact found</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
