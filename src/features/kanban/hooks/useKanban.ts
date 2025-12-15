// src/features/kanban/hooks/useKanban.ts
import { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import type { Task } from "../types/Types";

export const useKanban = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "create the project", status: "TODO" },
    { id: "2", title: "add components", status: "IN_PROGRESS" },
    { id: "3", title: "add styles", status: "DONE" },
  ]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: "TODO",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const moveTask = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          if (task.id === active.id) {
            return { ...task, status: over.id };
          }
          return task;
        });
      });
    }
  };

  return { tasks, addTask, moveTask };
};