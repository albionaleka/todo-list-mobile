import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TaskDetailsScreen() {
  const { id, title, description, status, createdAt } = useLocalSearchParams<{
    id: string;
    title: string;
    description?: string;
    status: string;
    createdAt: string;
  }>();

  const isCompleted = status === "true";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back to Tasks</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <View
            style={[
              styles.badge,
              isCompleted ? styles.doneBadge : styles.pendingBadge,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                isCompleted ? styles.doneText : styles.pendingText,
              ]}
            >
              {isCompleted ? "Completed" : "Pending"}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.text}>
            {description || "No description provided."}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Created At</Text>
          <Text style={styles.text}>
            {createdAt ? new Date(createdAt).toLocaleString() : "Unknown"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },
  backButton: {
    marginBottom: 20,
    paddingVertical: 8,
    marginTop: 60,
  },
  backButtonText: {
    color: "#4f46e5",
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
  },
  headerRow: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 12,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  doneBadge: {
    backgroundColor: "#dcfce7",
  },
  pendingBadge: {
    backgroundColor: "#fef3c7",
  },
  badgeText: {
    fontWeight: "700",
    fontSize: 12,
    textTransform: "uppercase",
  },
  doneText: {
    color: "#166534",
  },
  pendingText: {
    color: "#92400e",
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f5f9",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#94a3b8",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 16,
    color: "#334155",
    lineHeight: 24,
  },
  idText: {
    fontSize: 14,
    fontFamily: "Platform-specific-mono",
    color: "#64748b",
  },
});
