// src/App.tsx
import { DndContext } from "@dnd-kit/core";
import { useKanban } from "./features/kanban/hooks/useKanban";
import { KanbanColumn } from "./features/kanban/components/KanbanColumn";
import { CreateTaskForm } from "./features/kanban/components/CreateTaskForm";
import ThemeToggle from "./components/ThemeToggle"; // Bunu layout altına da alabilirsin sonra

export default function App() {
  const { tasks, addTask, moveTask } = useKanban();

  const COLUMNS = [
    { id: "TODO", title: "To Do" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

  return (
    <div className="p-10 min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      {/* Header Kısmı */}
      <div className="grid grid-cols-1 items-center mb-8">
        <h1 className="text-3xl text-center text-gray-800 dark:text-white font-semibold">
          Kanban Board
        </h1>
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        
        <CreateTaskForm onSubmit={addTask} />
      </div>

      {/* Kanban Board Kısmı */}
      <DndContext onDragEnd={moveTask}>
        <div className="flex gap-4 max-w-5xl mx-auto">
          {COLUMNS.map((col) => (
            <KanbanColumn
              key={col.id}
              id={col.id}
              title={col.title}
              tasks={tasks.filter((t) => t.status === col.id)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}