'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Task, TaskStatus } from '@/types'
import { tasksApi } from '@/lib/api/tasks'

type TasksContextType = {
    tasks: Task[]
    addTask: (description: string) => Promise<void>
    updateTask: (id: number, data: Partial<Task>) => Promise<void>
    deleteTask: (id: number) => Promise<void>
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

export const TasksProvider = ({ children }: {children: React.ReactNode}) => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await tasksApi.getAll()
            setTasks(data)            
        }
        fetchTasks()
    }, [])

    const addTask = async (description: string) => {
        try {
            await tasksApi.addTask(description)
            // Força uma nova referência do array para garantir re-render
            const newTasks = await tasksApi.getAll()
            setTasks([...newTasks])
        } catch (error) {
            console.error('Erro ao adicionar task:', error)
        }
    }

    const updateTask = async (id: number, data: Partial<Task>) => {
        try {
            // Atualização otimista - atualiza o estado local primeiro
            setTasks(prevTasks => 
                prevTasks.map(task => 
                    task.id === id ? { ...task, ...data } : task
                )
            )

            // Chama a API
            if (data.description !== undefined) {
                await tasksApi.setDescription(id, data.description)
            }
            if (data.status !== undefined) {
                await tasksApi.setStatus(id, data.status)
            }

            // Revalida com dados do servidor
            const updatedTasks = await tasksApi.getAll()
            setTasks([...updatedTasks])
        } catch (error) {
            console.error('Erro ao atualizar task:', error)
            // Em caso de erro, recarrega os dados do servidor
            const tasks = await tasksApi.getAll()
            setTasks([...tasks])
        }
    }

    const deleteTask = async (id: number) => {
        try {
            // Atualização otimista - remove do estado local primeiro
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
            
            // Chama a API
            await tasksApi.delTask(id)
            
            // Revalida com dados do servidor (opcional, mas recomendado)
            const updatedTasks = await tasksApi.getAll()
            setTasks([...updatedTasks])
        } catch (error) {
            console.error('Erro ao deletar task:', error)
            // Em caso de erro, recarrega os dados do servidor
            const tasks = await tasksApi.getAll()
            setTasks([...tasks])
        }
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksContext = () => {
    const context = useContext(TasksContext)
    if(!context) throw new Error('useTasksContext deve estar dentro de <TasksProvider>')
    return context
}