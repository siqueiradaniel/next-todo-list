import React from 'react'
import { Notebook, Pencil } from 'lucide-react'

const Header = () => {
    return (
        <div className='flex flex-row'>
            <h1 className='text-3xl font-bold text-gray-700'>ToDo List</h1>
            <Notebook className='ms-2 w-10 h-10 text-gray-700'/>
            <Pencil className='w-10 h-10 text-gray-700'/>
        </div>
    )
}

export default Header