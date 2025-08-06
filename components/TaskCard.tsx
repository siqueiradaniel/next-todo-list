'use client'

import React, { useEffect, useState } from 'react'
import { Task, TaskStatus } from '@/types'
import { Pencil, Trash, SquareCheckBig } from 'lucide-react'
import { tasksApi } from '@/lib/api/tasks'

const TaskCard = ({ _task }: { _task: Task }) => {
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [task, setTask] = useState<Task>(_task)
  const [description, setDescription] = useState<string>(task.description)
  const [wasDeleted, setWasDeleted] = useState<boolean>(false)

  console.log(task)

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      const success = await tasksApi.setDescription(task.id, description)
      if (success) {
        setTask((prev) => ({...prev, description}))
      }

      setIsEditing(false)
    }
  }
  
  const isTaskComplete = task.status === TaskStatus.COMPLETE

  const handleCompleteTask = async () => {
    let status: TaskStatus
    if (isTaskComplete) {
      status = TaskStatus.INCOMPLETE
    } else {
      status = TaskStatus.COMPLETE
    }

    const success = await tasksApi.setStatus(task.id, status)
    if (success) {
      setTask((prev) => ({...prev, status}))
    }
  }

  const handleDeleteTask = async () => {
    const success = await tasksApi.delTask(task.id) 

    if(success) {
      setWasDeleted(true)
    }
  }


  return (
    <div className={`${wasDeleted ? 'hidden' : ''} w-full bg-gray-200 flex flex-row justify-between rounded-md p-2 m-1 text-gray-600 text-xl ${isTaskComplete ? 'line-through' : ''}`}>

      <div className='w-auto'>
        {isEditing ? 
          <input 
            placeholder={task.description} 
            onChange={(e) => setDescription(e.target.value)} 
            onKeyDown={(e) => handleKeyDown(e)} />
          :
          task.description
        }
      </div>
      
      <div className='flex flex-row gap-2 ms-4'>
        <button onClick={handleCompleteTask }>
          <SquareCheckBig />
        </button>
        <button onClick={() => setIsEditing(!isEditing)}>
          <Pencil />
        </button>
        <Trash onClick={handleDeleteTask }/>
      </div>
       
    </div>
  )
}

export default TaskCard