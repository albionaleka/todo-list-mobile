import { useTasks } from "@/context/TaskContext";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditTaskScreen() {
  const { id } = useLocalSearchParams();
  const { getTask, updateTask } = useTasks();

  const task = getTask(id as string);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleUpdate = () => {
    if (!title.trim()) {
      Alert.alert("Validation", "Title is required");
      return;
    }

    updateTask(id as string, {
      title: title.trim(),
      description: description.trim(),
    });

    // Reset local state before navigating back
    setTitle("");
    setDescription("");

    router.back();
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Task</Text>

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleUpdate}
          style={[styles.button, styles.submitButton]}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "#e2e8f0",
    width: "50%",
  },
  submitButton: {
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  cancelButtonText: {
    color: "#0f172a",
  },
});
