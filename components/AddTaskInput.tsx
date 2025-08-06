'use client'

import { clientsApi } from '@/lib/api/client'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const AddTaskInput = async() => {
  const [description, setDescription] = useState<string>('')
  const clients = await clientsApi.getAll()

  const handleCreateTask = () => {
    console.log("koe")
  }

  return (
    <div className="w-full flex flex-row items-center rounded-4xl bg-gray-200 mt-4">
          <input 
            placeholder="Add your task" 
            className="w-full  p-2 px-4 placeholder-gray-400 text-xl" 
            onChange={(e) => setDescription(e.target.value)}
            />

          
          <Plus 
          className="bg-green-500 rounded-full text-gray-700 w-11 h-11 p-2" 
          strokeWidth={3.5} 
          onClick={handleCreateTask}
          />
        
        </div>
  )
}

export default AddTaskInput