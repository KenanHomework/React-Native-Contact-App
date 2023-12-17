import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function CallStatus({ status }) {
  // incoming
  // outgoing
  // rejected
  // missed

  const icons = new Map([
    ["incoming", "phone-callback"],
    ["outgoing", "phone-forwarded"],
    ["rejected", "phone-disabled"],
    ["missed", "phone-missed"],
  ]);

  const iconColors = new Map([
    ["incoming", "#909090"],
    ["outgoing", "#13a866"],
    ["rejected", "#31a4f4"],
    ["missed", "#d5362d"],
  ]);

  return (
    <View>
      <MaterialIcons
        name={icons.get(status)}
        size={26}
        color={iconColors.get(status)}
      />
    </View>
  );
}
