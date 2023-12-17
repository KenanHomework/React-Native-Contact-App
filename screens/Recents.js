import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SearchButton from "../components/SearchButton";
import ContactList from "../components/ContactList";
import React from "react";

export default function Recents() {
  return (
    <View style={styles.container}>
      <Header showStat={false} />
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <SearchButton />
      </View>
      <ContactList mode="recent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    padding: 20,
    gap: 10,
  },
});
