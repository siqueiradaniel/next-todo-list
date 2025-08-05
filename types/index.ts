export type Client = {
    id: number 
    email: string 
    password: string 
}

export type Task = {
    id: number 
    clientId: number 
    description: string 
}