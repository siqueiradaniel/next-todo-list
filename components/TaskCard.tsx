import React from 'react'
import { Task } from '@/types'

const TaskCard = ({task}: { task: Task}) => {
  return (
    <div className='w-full bg-gray-300'>
        {task.description}
        </div>
  )
}

export default TaskCard