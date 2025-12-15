import { DndContext } from "@dnd-kit/core";
import { useKanban } from "./features/kanban/hooks/useKanban";
import { KanbanColumn } from "./features/kanban/components/KanbanColumn";
import { CreateTaskForm } from "./features/kanban/components/CreateTaskForm";
import MainLayout from "./components/layout/MainLayout";

export default function App() {
  const { tasks, addTask, moveTask } = useKanban();

  const COLUMNS = [
    { id: "TODO", title: "To Do" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

  return (
    <MainLayout>
      
      <div className="mb-8 flex justify-center">
        <CreateTaskForm onSubmit={addTask} />
      </div>

      <DndContext onDragEnd={moveTask}>
        <div className="flex gap-4 flex-col md:flex-row">
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
      
    </MainLayout>
  );
}