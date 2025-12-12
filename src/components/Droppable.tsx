import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: isOver ? "#dcfce7" : "#f3f4f6",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 rounded-lg min-h-[50px] w-full border-2 border-dashed border-gray-300"
    >
      {props.children}
    </div>
  );
}
