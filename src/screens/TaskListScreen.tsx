import TaskCard from "@/components/TaskCard";
import { Task } from "@/types/task";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

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

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    setTasks(initialTasks);
  }, []);

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

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() => {
              setTasks((prevTasks) =>
                prevTasks.map((task) =>
                  task.id === item.id
                    ? { ...task, status: !task.status }
                    : task,
                ),
              );
            }}
            onDelete={() => {
              setTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== item.id),
              );
            }}
            onPress={() => {
              //TODO: Navigate to task details screen
            }}
          />
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
