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
      {/* <View
        style={{
          gap: 10,
        }}
      >
        <Contact contact={{ title: "Kanan" }} />
        <Contact contact={{ title: "Ana" }} />
        <Contact contact={{ title: "Natiq" }} />
        <Contact contact={{ title: "Ceyhun" }} />
        <Contact contact={{ title: "Xalid" }} />
      </View> */}
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
