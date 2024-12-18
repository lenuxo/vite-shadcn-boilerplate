import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-200 to-indigo-200 flex items-center justify-center p-4">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-800 py-4">
          欢迎使用vite-shadcn-boilerplate
        </h1>
        <div className="flex justify-center gap-2">
          <div className="h-1 w-16 bg-violet-500 rounded-full" />
          <div className="h-1 w-16 bg-indigo-500 rounded-full" />
          <div className="h-1 w-16 bg-violet-500 rounded-full" />
        </div>
      </div>
    </div>
  )
}