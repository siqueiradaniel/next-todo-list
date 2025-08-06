import { Task, TaskStatus } from '@/types'
import { tasksData } from '@/data/tasks'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const tasksApi = {
    getAll: async (): Promise<Task[]> => {
        await delay(500)
        return tasksData
    },

    /////////////////////////// MUDAR o clientId
    addTask: async (description: string): Promise<boolean> => {
        await delay(500)
        
        const task: Task = {
            id: Math.max(...tasksData.map(t => t.id)) + 1,
            clientId: 1,
            description: description,
            status: TaskStatus.INCOMPLETE
        }

        tasksData.push(task)
        return true
    },

    setDescription: async (taskId: number, description: string): Promise<boolean> => {
        await delay(300)
        const task = tasksData.find((t) => t.id === taskId)

        if(task) {
            task.description = description
            return true
        } else {
            console.log('Erro em editar task!')
            return false
        }
    },

    setStatus: async (taskId: number, status: TaskStatus ): Promise<boolean> => {
        await delay(300)
        const task = tasksData.find((t) => t.id === taskId)

        if(task) {
            task.status = status
            return true
        } else {
            console.log('Erro em setStatus!')
            return false
        }
    },

    delTask: async (taskId: number): Promise<boolean> => {
        await delay(300)
        const index = tasksData.findIndex((t) => t.id === taskId) 

        if(index !== -1) {
            tasksData.splice(index, 1)
            return true
        } else {
            console.log('Erro em delTask')
            return false
        }
    }
}