import { Task } from "@/types/task";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const initialTasks: Task[] = [
    {
      id: "1",
      title: "Buy groceries",
      description: "Milk, eggs, bread",
      status: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Finish Task",
      description: "Complete the React Native project",
      status: false,
      createdAt: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    setTasks(initialTasks);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.status ? "Completed" : "Pending"}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  taskItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
};
