import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Avatar({ title }) {
  const firstLetter = title.toUpperCase()[0];
  const [containerStyle, setContainerStyle] = useState({});

  const colors = [
    "#86cabd",
    "#a4dd90",
    "#6bc1d9",
    "#abb1fa",
    "#fead86",
    "#f690b7",
    "#80c9f4",
    "#c9d87b",
    "#b0b4fd",
    "#febf58",
    "#feb67b",
    "#929ffa",
    "#89ecc2",
    "#ffaf89",
    "#cca5f3",
    "#96b1f6",
    "#4a86e1",
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    setContainerStyle({
      width: 30,
      height: 30,
      borderRadius: 100,
      backgroundColor: getRandomColor(),
      alignItems: "center",
      justifyContent: "center",
    });
  }, []);

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{firstLetter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 17,
  },
});
