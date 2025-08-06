"use client"

import Header from "@/components/Header";
import TaskCardList from "@/components/TaskCardList";
import { useTasksContext } from "@/context/TasksContext";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { addTask } = useTasksContext()
  const [description, setDescription] = useState<string>("")

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == 'Escape') {
      setDescription('')
    }
  }

  const handleAddTask = async () => {
    await addTask(description)
  }

  return (
    <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
      <div className="h-full min-w-xl flex flex-col items-center bg-gray-100 p-8 rounded-xl">
        <Header />
        <div className="w-full flex flex-row items-center rounded-4xl bg-gray-200 mt-4">
          <input
            placeholder="Add your task"
            value={description}
            className="w-full  p-2 px-4 placeholder-gray-400 text-xl text-gray-700 outline-none" 
            onChange={(e) => setDescription(e.target.value)} 
            onKeyDown={handleOnKeyDown}/>

          <button onClick={handleAddTask} >
            <Plus className="bg-green-500 rounded-full text-gray-700 w-11 h-11 p-2 cursor-pointer" strokeWidth={3.5} />
          </button>
        </div>
        <TaskCardList />
      </div>
    </div>
  );
}
