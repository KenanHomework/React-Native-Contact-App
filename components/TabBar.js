import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButton}
            activeOpacity={0.7}
          >
            <Text
              style={[
                { ...styles.label },
                { color: isFocused ? "#fff" : "#444746" },
              ]}
            >
              {label}
            </Text>
            {isFocused && (
              <View
                style={{
                  width: "70%",
                  height: 3,
                  backgroundColor: "#fff",
                  borderRadius: 100,
                }}
              ></View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
  },
  tabBarButton: {
    flex: 1,
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
  },
});
