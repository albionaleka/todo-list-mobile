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

  useEffect(() => {
    (async () => {
      const data = await loadTasks();
      setTasks(data);
      setLoading(false);
    })();
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
