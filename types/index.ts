export type Client = {
    id: number 
    email: string 
    password: string 
}

export enum TaskStatus {
    COMPLETE = 'COMPLETE',
    INCOMPLETE = 'INCOMPLETE'
}

export type Task = {
    id: number 
    clientId: number 
    description: string 
    status: TaskStatus
}