// src/features/kanban/components/KanbanColumn.tsx
import { Droppable } from "../../../components/common/Droppable";
import { TaskCard } from "./TaskCard";
import type { Task } from "../types/Types";

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

export const KanbanColumn = ({ id, title, tasks }: KanbanColumnProps) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">
        {title}
      </h2>
      <Droppable id={id}>
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {tasks.length === 0 && (
            <div className="text-gray-400 text-sm text-center py-4">
              No tasks here
            </div>
          )}
        </div>
      </Droppable>
    </div>
  );
};