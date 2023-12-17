import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchHeader from "../components/screens/SearchHeader";
import ContactList from "../components/ContactList";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SearchHeader handleSearch={setSearch} />

      {search ? (
        <View style={{ paddingVertical: 30 }}>
          <Text
            style={{
              color: "#dfdfdf",
              fontSize: 16,
              marginBottom: 10,
              marginLeft: 20,
            }}
          >
            Contacts
          </Text>
          <ContactList search={search} mode={"contacts"} />
          <Text
            style={{
              color: "#dfdfdf",
              fontSize: 16,
              marginBottom: 10,
              marginLeft: 20,
            }}
          >
            Recents
          </Text>
          <ContactList search={search} mode={"recents"} />
        </View>
      ) : (
        <Empty />
      )}
    </View>
  );
}

function Empty() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      >
        Search for contacts
      </Text>
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
