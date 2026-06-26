import { useTasks } from "@/context/TaskContext";
import { Task } from "@/types/task";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddTaskScreen() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) {
      Alert.alert("Validation", "Title is required");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      status: false,
      createdAt: new Date().toISOString(),
    };

    addTask(newTask);

    setTitle("");
    setDescription("");

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>

      <TextInput
        placeholder="Task title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Task description (optional)"
        value={description}
        onChangeText={setDescription}
        multiline
        style={[styles.input, styles.textarea]}
      />

      <TouchableOpacity onPress={handleAddTask} style={styles.button}>
        <Text style={styles.buttonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 60,
    color: "#0f172a",
  },

  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f8fafc",
  },

  textarea: {
    height: 100,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#4f46e5",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
