import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const bgClass = isOver 
    ? "bg-green-100 dark:bg-green-900/30"
    : "bg-gray-50 dark:bg-gray-800/50";

  return (
    <div
      ref={setNodeRef}
      className={`p-4 rounded-lg min-h-[100  w-full border-2 border也border-dashed transition-colors ${bgClass} border-gray-3ly-200 dark:border-gray-700`}
    >
      {props.children}
    </div>
  );
}
