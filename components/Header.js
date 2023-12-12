import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import Contacts from "../contacts.json";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone</Text>
      <Text style={styles.describe}>
        {Contacts.length} contacts with phone numbers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  titleContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    gap: 10,
  },
  title: {
    color: "#fff",
    fontSize: 35,
  },
  describe: {
    color: "#575757",
    fontSize: 16,
  },
});
