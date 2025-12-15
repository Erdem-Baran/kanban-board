import React, { useState } from "react";

interface CreateTaskFormProps {
  onSubmit: (title: string) => void;
}

export const CreateTaskForm = ({ onSubmit }: CreateTaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-center justify-center mt-4 mb-4 font-semibold">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task..."
        className="p-2 rounded border max-w-2xs border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
      />
      <button
        type="submit"
        className="mt-0 bg-blue-500 text-white p-2 rounded max-w-2xs hover:bg-blue-600 w-full cursor-pointer"
      >
        submit
      </button>
    </form>
  );
};