import React from "react";

import { Text } from "react-native";

const Key = ({ label }) => {
  return (
    <Text
      style={{
        color: "#fff",
        fontSize: 30,
        padding: 20,
      }}
    >
      {label}
    </Text>
  );
};

export default Key;
