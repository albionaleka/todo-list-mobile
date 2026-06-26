import { TaskProvider } from "@/context/TaskContext";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <TaskProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="task/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="tasks" options={{ headerShown: false }} />
        <Stack.Screen name="add-task" options={{ headerShown: false }} />
        <Stack.Screen name="edit/[id]" options={{ headerShown: false }} />
      </Stack>
    </TaskProvider>
  );
}
