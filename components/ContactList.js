import { StyleSheet, Text, View, SectionList } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import ContactsData from "../contacts.json";
import CallHistory from "../callHistory.json";
import Contact from "./Contact";
import EmptyList from "./EmptyList";

export default function ContactList({ search, mode = "contacts" }) {
  const [contacts, setContacts] = useState([]);

  function groupAndSortContactsAlphabetically(contacts) {
    const filteredContacts =
      search && search.length > 0
        ? contacts.filter((contact) =>
            contact.name.toUpperCase().includes(search.toUpperCase())
          )
        : contacts;

    const groupedContacts = {};

    filteredContacts.forEach((contact) => {
      const firstLetter = contact.name.charAt(0).toUpperCase();

      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }

      groupedContacts[firstLetter].push(contact);
    });

    const result = Object.keys(groupedContacts).map((letter) => {
      return {
        title: letter,
        data: groupedContacts[letter],
      };
    });

    result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }

  const memoizedContacts = useMemo(
    () =>
      groupAndSortContactsAlphabetically(
        mode === "contacts" ? ContactsData : CallHistory
      ),
    [search]
  );

  useEffect(() => {
    setContacts(memoizedContacts);
  }, [memoizedContacts]);

  return (
    <SectionList
      stickySectionHeadersEnabled={true}
      sections={contacts}
      extraData={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index, section }) => (
        <Contact
          contact={item}
          index={index}
          lastIndex={section.data.length - 1}
          mode={mode}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      SectionSeparatorComponent={() => <View style={{ marginTop: 20 }}></View>}
      ListEmptyComponent={<EmptyList />}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    color: "#717171",
    backgroundColor: "#000",
    fontSize: 20,
    paddingLeft: 30,
  },
});
