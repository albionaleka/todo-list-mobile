import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBlock}>
        <Text style={styles.greeting}>Hello there!</Text>
        <Text style={styles.tagline}>
          Ready to manage your day effectively?
        </Text>
      </View>

      <View style={styles.illustrationPlaceholder}>
        <Text style={styles.emoji}>📝</Text>
      </View>

      <View style={styles.actionHub}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/tasks")}
        >
          <Text style={styles.primaryButtonText}>View My Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
    justifyContent: "space-between",
  },
  welcomeBlock: {
    marginTop: 80,
  },
  greeting: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#64748b",
    lineHeight: 24,
  },
  illustrationPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 80,
  },
  actionHub: {
    marginBottom: 40,
    gap: 16,
    minHeight: 90,
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#4f46e5",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 4,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  statsFooter: {
    textAlign: "center",
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: "500",
    height: 20,
  },
});
