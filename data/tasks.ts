import { Task, TaskStatus } from '@/types'

export const tasksData = [
    {
        id: 1,
        clientId: 1,
        description: 'Construir app next simples',
        status: TaskStatus.INCOMPLETE
    },
    {
        id: 2,
        clientId: 2,
        description: 'Construção do sistema',
        status: TaskStatus.INCOMPLETE
    }
]