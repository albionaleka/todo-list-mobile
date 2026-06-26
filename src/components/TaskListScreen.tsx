import Filter from "@/components/Filter";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import { Task } from "@/types/task";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function TaskListScreen() {
  const { tasks, deleteTask, toggleTask } = useTasks();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.status
          : !task.status;

    return matchesSearch && matchesFilter;
  });

  const handlePress = (item: Task) => {
    router.push({
      pathname: "/task/[id]" as const,
      params: {
        id: item.id,
        title: item.title,
        description: item.description,
        status: String(item.status),
        createdAt: item.createdAt,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Tasks</Text>

      <Filter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
            onPress={() => handlePress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 20,
  },
  taskItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
