import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  name?: string;
}

export default function Header({ name = "Albiona" }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Welcome back <Text style={styles.wave}>👋</Text>
      </Text>

      <Text style={styles.title}>
        Manage Your{"\n"}
        <Text style={styles.highlight}>Daily Tasks</Text>
      </Text>

      <Text style={styles.subtitle}>
        Stay organized and finish your goals today
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 28,
    gap: 10,
  },

  greeting: {
    fontSize: 15,
    color: "#8E8E93",
    fontWeight: "500",
    letterSpacing: 0.3,
  },

  wave: {
    fontSize: 16,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#121212",
    lineHeight: 42,
  },

  highlight: {
    color: "#5B67F1",
  },

  subtitle: {
    fontSize: 15,
    color: "#7B7B7B",
    lineHeight: 22,
  },
});
