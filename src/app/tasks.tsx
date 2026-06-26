import TaskListScreen from "@/components/TaskListScreen";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={{ height: "100%" }}>
      <TaskListScreen />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          router.push("/add-task");
        }}
        activeOpacity={0.8}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 10,
    backgroundColor: "#5B67F1",
    width: 48,
    height: 48,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#5B67F1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    elevation: 5,
  },
  fabText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: -5,
  },
});
