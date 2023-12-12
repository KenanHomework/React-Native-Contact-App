import { StyleSheet, View, StatusBar } from "react-native";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar handleChange={setSearch} />
      <ContactList search={search} />
      <StatusBar style="dark" />
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
