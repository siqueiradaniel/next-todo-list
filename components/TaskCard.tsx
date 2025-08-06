import React from 'react'
import { Task } from '@/types'
import { Pencil, Trash, SquareCheckBig } from 'lucide-react'

const TaskCard = ({task}: { task: Task}) => {
  return (
    <div className='w-full bg-gray-200 flex flex-row justify-between rounded-md p-2 m-1 text-gray-600 text-xl'>
        {task.description}
        <div className='flex flex-row gap-2 ms-4'>
            <SquareCheckBig />
            <Pencil />
            <Trash />
        </div>
    </div>
  )
}

export default TaskCard