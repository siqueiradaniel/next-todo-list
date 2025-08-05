import { tasksApi } from '@/lib/api/tasks'
import React from 'react'
import TaskCard from './TaskCard'

const TaskCardList = async () => {
  const tasks = await tasksApi.getAll()
  console.log(tasks)

  return (
    <div className='flex flex-col items-center'>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
    </div>
  )
}

export default TaskCardList