import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./components/Droppable";
import { Draggable } from "./components/Draggable";

type Task = {
  id: string;
  title: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "projeyi oluştur", status: "TODO" },
    { id: "2", title: "bileşenleri ekle", status: "IN_PROGRESS" },
    { id: "3", title: "stil ekle", status: "DONE" },
  ]);

  const COLUMNS = [
    { id: "TODO", title: "To Do" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

  const [isDropped, setIsDropped] = useState<boolean>(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Kanban Board
      </h1>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 max-w-5xl mx-auto">
          {COLUMNS.map((col) => (
            <div key={col.id} className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {col.title}
              </h2>

              <Droppable id={col.id}>
                <div className="flex flex-col gap-3">
                  {tasks
                    .filter((task) => task.status === col.id)
                    .map((task) => (
                      <Draggable key={task.id} id={task.id}>
                        <div className="bg-white p-4 rounded shadow-sm hover:shadow-md border border-gray-200">
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
            return { ...task, status: over.id};
          }
          return task;
        });
      });
    }
  }
}
