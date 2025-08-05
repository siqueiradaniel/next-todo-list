import { Client } from '@/types'
import { clientsData } from '@/data/clients'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const clientsApi = {
    getAll: async (): Promise<Client[]> => {
        await delay(500)
        return clientsData
    }
}