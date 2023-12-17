import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function ContactDescription({ contact, showSeparator, mode }) {
  const callTitle = new Map([
    ["incoming", "Incoming"],
    ["outgoing", "Outgoing"],
    ["rejected", "Declined"],
    ["missed", "Missed"],
  ]);

  function formatTime(time) {
    if (["missed", "rejected"].includes(contact.status)) return "";

    const minute = Math.floor(time / 60);

    const backSeconds = time % 60;

    return `${minute} minute ${backSeconds} sec`;
  }

  return (
    <View style={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Number</Text>
          <Text style={styles.phone}>{contact.number}</Text>
        </View>
        {mode === "recent" && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {callTitle.get(contact.status)} Call
            </Text>
            <Text style={styles.phone}>{formatTime(contact.time)}</Text>
          </View>
        )}
        <View style={styles.iconContainer}>
          <FontAwesome
            name="phone"
            size={20}
            color="#fff"
            style={{ ...styles.icon, backgroundColor: "#13a866" }}
          />
          <MaterialCommunityIcons
            name="message"
            size={20}
            color="#fff"
            style={{ ...styles.icon, backgroundColor: "#31a4f4" }}
          />
          <FontAwesome
            name="video-camera"
            size={20}
            color="#fff"
            style={{ ...styles.icon, backgroundColor: "#13a866" }}
          />
          <Foundation
            name="info"
            size={20}
            color="#fff"
            style={{ ...styles.icon, backgroundColor: "#909090" }}
          />
        </View>
      </View>
      {showSeparator && (
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#262626",
            marginTop: 20,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    paddingLeft: 40,
    gap: 20,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 5,
    gap: 10,
    alignItems: "center",
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  title: {
    color: "#dfdfdf",
    fontSize: 14,
  },
  phone: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  icon: {
    width: 35,
    height: 35,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 100,
  },
});
