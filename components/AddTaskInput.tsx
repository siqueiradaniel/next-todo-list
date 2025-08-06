'use client'

import { useTasksContext } from '@/context/TasksContext'
import { clientsApi } from '@/lib/api/client'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const AddTaskInput = () => {
  const { addTask } = useTasksContext()
  const [description, setDescription] = useState<string>("")

  const handleOnKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key == 'Escape') {
      setDescription('')
    }
    if (e.key == 'Enter') {
      await addTask(description)
      setDescription('')
    }
  }

  const handleAddTask = async () => {
    await addTask(description)
    setDescription('')
  }

  return (
    <div className="w-full flex flex-row items-center rounded-4xl bg-gray-200 mt-4">
      <input
        placeholder="Add your task"
        value={description}
        className="w-full  p-2 px-4 placeholder-gray-400 text-xl text-gray-700 outline-none"
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleOnKeyDown} />

      <button onClick={handleAddTask} >
        <Plus className="bg-green-500 rounded-full text-gray-700 w-11 h-11 p-2 cursor-pointer" strokeWidth={3.5} />
      </button>
    </div>
  )
}

export default AddTaskInput