# 📋 Modern Kanban Board

A modern Kanban Board application developed using React, TypeScript, and Tailwind CSS v4, featuring Drag & Drop functionality and theme support.

## ✨ Features

- **Drag & Drop:** Smoothly move tasks between columns with the `@dnd-kit` infrastructure.
- **Dark & Light Mode:** Theme support powered by Tailwind CSS v4 that remembers user preference (localStorage).
- **Task Management:** Easily add new tasks and manage their statuses.
- **Feature-Based Architecture:** A scalable, modular, and easy-to-maintain file structure.
- **Responsive Design:** A modern interface compatible with both mobile and desktop.

## 🛠️ Technologies

This project was built using the following technologies:

- **[React 19](https://react.dev/)** - UI Library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Fast development environment and build tool
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Styling
- **[@dnd-kit/core](https://dndkit.com/)** - Drag and drop logic
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon set

## 🚀 Installation and Usage

Follow these steps to run the project in your local environment:

1. **Clone the project:**
    ```bash
    git clone (https://github.com/Erdem-Baran/kanban-board.git)
    cd kanban-board
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Go to `http://localhost:5173` in your browser.

## 📂 Project Structure

The project uses a **Feature-Based** folder structure for sustainability and scalability:

```text
src/
├── assets/                  # Static files (Images, etc.)
├── components/              # Application-wide components
│   ├── common/              # General UI parts like Draggable, Droppable
│   └── layout/              # Layout components like MainLayout
├── features/                # Business logic (Domain Logic)
│   └── kanban/              # Everything related to the Kanban feature
│       ├── components/      # TaskCard, KanbanColumn, Form...
│       ├── hooks/           # useKanban (State and logic)
│       └── types/           # Kanban-specific types (Task interface)
├── hooks/                   # Global hooks (useTheme)
├── App.tsx                  # Main application component
└── main.tsx                 # Entry point
