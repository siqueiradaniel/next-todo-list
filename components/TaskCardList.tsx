import { tasksApi } from '@/lib/api/tasks'
import React from 'react'
import TaskCard from './TaskCard'

const TaskCardList = async () => {
  const tasks = await tasksApi.getAll()

  return (
    <div className='flex flex-col w-full items-center mt-12'>
        {tasks.map((task) => (
          <TaskCard key={task.id} _task={task}/>
        ))}
    </div>
  )
}

export default TaskCardList