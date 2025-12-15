// src/components/layout/MainLayout.tsx
import React from "react";
import ThemeToggle from "../ThemeToggle";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    // 1. Main container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300 font-sans">
      
      {/* 2. Content limiter */}
      <div className="max-w-5xl mx-auto p-10">
        
        {/* 3. Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Kanban Board
          </h1>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>

        {/* 4. Main */}
        <main>
          {children}
        </main>
        
      </div>
    </div>
  );
}