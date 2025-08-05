import { Task } from '@/types'
import { tasksData } from '@/data/tasks'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const tasksApi = {
    getAll: async (): Promise<Task[]> => {
        await delay(500)
        return tasksData
    }
}