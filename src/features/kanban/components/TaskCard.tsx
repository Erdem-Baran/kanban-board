// src/features/kanban/components/TaskCard.tsx
import { Draggable } from "../../../components/common/Draggable";
import type { Task } from "../types/Types";

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Draggable id={task.id}>
      <div className="bg-white p-4 rounded shadow-sm hover:shadow-md border border-gray-200 cursor-grab dark:bg-gray-700 dark:text-white dark:border-gray-600">
        {task.title}
      </div>
    </Draggable>
  );
};