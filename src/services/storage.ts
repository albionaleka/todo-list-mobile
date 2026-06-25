import type { Task } from "@/types/task";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "tasks";

export async function loadTasks(): Promise<Task[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data) as Task[];
  } catch (error) {
    console.error("Failed to load tasks:", error);
    return [];
  }
}

export async function saveTasks(tasks: Task[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks:", error);
  }
}
