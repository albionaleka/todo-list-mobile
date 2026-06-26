import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import StatusFilter from "./StatusFilter";

type FilterProps = {
  search: string;
  setSearch: (value: string) => void;

  filter: "all" | "completed" | "pending";
  setFilter: (value: "all" | "completed" | "pending") => void;
};

export default function Filter({
  search,
  setSearch,
  filter,
  setFilter,
}: FilterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TextInput
          placeholder="Search tasks..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      <StatusFilter selected={filter} onSelect={setFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
  },
});
