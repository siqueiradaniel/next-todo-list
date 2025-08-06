'use client'

import React from 'react'
import TaskCard from './TaskCard'
import { useTasksContext } from '@/context/TasksContext'

const TaskCardList = () => {
  const { tasks } = useTasksContext()
  
  return (
    <div className='flex flex-col w-full items-center mt-12'>
        {tasks.map((task) => (
          <TaskCard key={task.id} taskId={task.id}/>
        ))}
    </div>
  )
}

export default TaskCardList