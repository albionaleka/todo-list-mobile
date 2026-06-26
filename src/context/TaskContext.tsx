import { loadTasks, saveTasks } from "@/services/storage";
import { Task } from "@/types/task";
import React, { createContext, useContext, useEffect, useState } from "react";

type TaskContextType = {
  tasks: Task[];
  loading: boolean;

  getTask: (id: string) => Task | undefined;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  updateTask: (id: string, updated: Partial<Task>) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
      );

      const data = await response.json();

      return data.map((item: any) => ({
        id: String(item.id),
        title: item.title,
        description: "Imported task",
        status: item.completed,
        createdAt: new Date().toISOString(),
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const local = await loadTasks();

        if (local.length > 0) {
          setTasks(local);
        } else {
          const apiTasks = await fetchTasks();

          setTasks(apiTasks);

          await saveTasks(apiTasks);
        }
      } catch (error) {
        console.error("Failed loading tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const persist = async (newTasks: Task[]) => {
    setTasks(newTasks);
    await saveTasks(newTasks);
  };

  const getTask = (id: string) => {
    return tasks.find((t) => t.id === id);
  };

  const addTask = (task: Task) => {
    persist([task, ...tasks]);
  };

  const deleteTask = (id: string) => {
    persist(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: string) => {
    persist(tasks.map((t) => (t.id === id ? { ...t, status: !t.status } : t)));
  };

  const updateTask = (id: string, updated: Partial<Task>) => {
    persist(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        getTask,
        addTask,
        deleteTask,
        toggleTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }
  return context;
};
