import { Task } from "@/types/task";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TaskCardProps = {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
  onPress: () => void;
  onEdit: () => void;
};

export default function TaskCard({
  task,
  onToggle,
  onDelete,
  onPress,
  onEdit,
}: TaskCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.card}>
      <View style={styles.contentContainer}>
        <Text
          numberOfLines={1}
          style={task.status ? styles.doneText : styles.titleText}
        >
          {task.title}
        </Text>
        {task.description ? (
          <Text numberOfLines={2} style={styles.descriptionText}>
            {task.description}
          </Text>
        ) : null}
      </View>

      <View style={styles.divider} />

      <View style={styles.actions}>
        <TouchableOpacity
          onPress={onToggle}
          style={[
            styles.actionButton,
            task.status ? styles.undoButton : styles.doneButton,
          ]}
        >
          <Text
            style={[
              styles.actionText,
              task.status ? styles.undoText : styles.doneButtonText,
            ]}
          >
            {task.status ? "Mark Incomplete" : "Complete Task"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
  },
  contentContainer: {
    marginBottom: 12,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0f172a",
    lineHeight: 22,
    marginBottom: 4,
  },
  doneText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#94a3b8",
    lineHeight: 22,
    textDecorationLine: "line-through",
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f5f9",
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  doneButton: {
    backgroundColor: "#4f46e5",
  },
  undoButton: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#cbd5e1",
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff1f2",
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  doneButtonText: {
    color: "#ffffff",
  },
  undoText: {
    color: "#475569",
  },
  deleteText: {
    color: "#e11d48",
    fontSize: 14,
    fontWeight: "600",
  },
  editText: {
    color: "#4f46e5",
    fontSize: 14,
    fontWeight: "600",
  },
});
