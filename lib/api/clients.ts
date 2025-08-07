import { Client } from '@/types'
import { clientsData } from '@/data/clients'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const clientsApi = {
    getAll: async (): Promise<Client[]> => {
        await delay(500)
        return clientsData
    },

    login: async (email: string, password: string): Promise<Client | null> => {
        await delay(100)

        const client = clientsData.find((e) => e.email === email)
        return client ? client : null
    },


    getById: async (id: number): Promise<Client | null> => {
        await delay(100)

        const client = clientsData.find((e) => e.id === id)
        return client ? client : null
    },

    register: async (email: string, password: string): Promise<Client | null> => {
        await delay(300)
        
        const client: Client = {
            id: Math.max(...clientsData.map(t => t.id)) + 1,
            email: email,
            password: password
        }

        clientsData.push(client)
        return client
    },
}