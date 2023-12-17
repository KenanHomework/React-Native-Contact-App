import { StyleSheet, View } from "react-native";
import React from "react";
import KeyboardHeader from "../components/screens/KeyboardHeader";
import Key from "../components/screens/Key";
import { FontAwesome } from "@expo/vector-icons";

export default function Keyboard() {
  return (
    <View style={styles.container}>
      <KeyboardHeader />

      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 20,
            height: "auto",
          }}
        >
          <View style={styles.row}>
            <Key label={"1"} />
            <Key label={"2"} />
            <Key label={"3"} />
          </View>
          <View style={styles.row}>
            <Key label={"4"} />
            <Key label={"5"} />
            <Key label={"6"} />
          </View>
          <View style={styles.row}>
            <Key label={"7"} />
            <Key label={"8"} />
            <Key label={"9"} />
          </View>
          <View style={styles.row}>
            <Key label={"*"} />
            <Key label={"0"} />
            <Key label={"#"} />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <FontAwesome
            name="phone"
            size={30}
            color="#fff"
            style={{ ...styles.icon, backgroundColor: "#13a866" }}
          />
        </View>
      </View>
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
  row: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 60,
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 100,
  },
});
