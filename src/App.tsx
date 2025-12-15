import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./components/Droppable";
import { Draggable } from "./components/Draggable";
import type { Task } from "./types/Types";
import { CiLight } from "react-icons/ci";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "projeyi oluştur", status: "TODO" },
    { id: "2", title: "bileşenleri ekle", status: "IN_PROGRESS" },
    { id: "3", title: "stil ekle", status: "DONE" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const COLUMNS = [
    { id: "TODO", title: "To Do" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      status: "TODO",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
  };

  return (
    <div className="p-10 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-3 items-center mb-8">
        <div>
          <form onSubmit={handleFormSubmit} className="flex gap-2">
            <input
              type="text"
              name="task"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Add new task..."
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
            <button
              type="submit"
              className="mt-0 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
            >
              submit
            </button>
          </form>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Kanban Board
        </h1>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 max-w-5xl mx-auto">
          {COLUMNS.map((col) => (
            <div key={col.id} className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">
                {col.title}
              </h2>

              <Droppable id={col.id}>
                <div className="flex flex-col gap-3">
                  {tasks
                    .filter((task) => task.status === col.id)
                    .map((task) => (
                      <Draggable key={task.id} id={task.id}>
                        <div className="bg-white p-4 rounded shadow-sm hover:shadow-md border border-gray-200 cursor-grab dark:bg-gray-700 dark:text-white dark:border-gray-600">
                          {task.title}
                        </div>
                      </Draggable>
                    ))}
                  {tasks.filter((t) => t.status === col.id).length === 0 && (
                    <div className="text-gray-400 text-sm text-center py-4">
                      Boş
                    </div>
                  )}
                </div>
              </Droppable>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
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
  }
}
