import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  selected: "all" | "completed" | "pending";
  onSelect: (value: "all" | "completed" | "pending") => void;
};

const filters = ["all", "pending", "completed"];

export default function StatusFilter({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {filters.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => onSelect(item as any)}
          style={[styles.button, selected === item && styles.active]}
        >
          <Text style={[styles.text, selected === item && styles.activeText]}>
            {item.at(0)?.toUpperCase() + item.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#EEE",
  },

  active: {
    backgroundColor: "#4f46e5",
  },

  text: {
    fontWeight: "500",
  },

  activeText: {
    color: "white",
  },
});
