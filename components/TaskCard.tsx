'use client'

import React, { useState } from 'react'
import { Task, TaskStatus } from '@/types'
import { Pencil, Trash, SquareCheckBig } from 'lucide-react'
import { useTasksContext } from '@/context/TasksContext'

const TaskCard = ({ taskId }: { taskId: number }) => {
  const { tasks, updateTask, deleteTask } = useTasksContext()
  const task = tasks.find((t) => t.id === taskId)

  const [description, setDescription] = useState<string>(task?.description || '')
  const [isEditing, setIsEditing] = useState<boolean>(false)

  if (!task) return null

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      await updateTask(taskId, { description: description })
      setIsEditing(false)
    }
    if (e.key === 'Escape') {
      setDescription(task.description)
      setIsEditing(false)
    }
  }

  const isTaskComplete = task.status === TaskStatus.COMPLETE

  const handleCompleteTask = async () => {
    const newStatus = isTaskComplete ? TaskStatus.INCOMPLETE : TaskStatus.COMPLETE
    await updateTask(taskId, { status: newStatus })
  }

  const handleDeleteTask = async () => {
    await deleteTask(taskId)
  }

  const handleEditClick = () => {
    setDescription(task.description)
    setIsEditing(!isEditing)
  }

  return (
    <div className={`w-full bg-gray-200 flex flex-row justify-between rounded-md p-2 m-1 text-gray-600 text-xl ${isTaskComplete ? 'line-through' : ''}`}>
      <div className='w-auto'>
        {isEditing ?
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}

            className="bg-transparent border-none outline-none text-gray-400"
          />
          :
          task.description
        }
      </div>

      <div className='flex flex-row gap-2 ms-4'>
        <button
          onClick={handleCompleteTask}
          className='cursor-pointer'>
          <SquareCheckBig />
        </button>
        <button
          onClick={handleEditClick}
          className='cursor-pointer'>
          <Pencil />
        </button>
        <button
          onClick={handleDeleteTask}
          className='cursor-pointer'>
          <Trash />
        </button>
      </div>
    </div>
  )
}

export default TaskCard