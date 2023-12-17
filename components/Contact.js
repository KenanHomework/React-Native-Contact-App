import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, memo } from "react";
import Avatar from "./Avatar";
import ContactDescription from "./ContactDescription";
import CallStatus from "./CallStatus";

export default Contact = memo(({ contact, index, lastIndex, mode }) => {
  const [isOpen, setIsOpen] = useState();

  const changeState = () => setIsOpen((prev) => !prev);

  const showSeparator = lastIndex !== 0;

  const containerBorderRadiusStyles = [
    lastIndex === 0
      ? {}
      : index === 0
      ? {
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 0,
        }
      : index === lastIndex
      ? {
          borderTopEndRadius: 0,
          borderTopStartRadius: 0,
        }
      : {
          borderRadius: 0,
        },
  ];

  return (
    <TouchableOpacity
      style={[{ ...styles.container }, containerBorderRadiusStyles]}
      onPress={changeState}
    >
      <View style={styles.titleContainer}>
        {mode === "contacts" ? (
          <Avatar title={contact.name} />
        ) : (
          <CallStatus status={contact.status} />
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            height: 30,
          }}
        >
          <Text style={styles.title}>{contact.name}</Text>
          {!isOpen && showSeparator && (
            <View
              style={{
                width: "80%",
                height: 1,
                backgroundColor: "#262626",
                // marginHorizontal: -20,
                // marginLeft: mode == "contacts" ? 55 : 40,
              }}
            />
          )}
        </View>
      </View>
      {isOpen && (
        <ContactDescription
          contact={contact}
          mode={mode}
          showSeparator={showSeparator}
        />
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#171717",
    paddingVertical: 8,
    paddingHorizontal: 20,
    display: "flex",
    borderRadius: 30,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
  title: {
    marginTop: 3,
    // marginBottom: 10,
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});
