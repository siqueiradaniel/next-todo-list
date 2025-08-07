'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Client } from '@/types'
import { clientsApi } from '@/lib/api/clients'
import { useRouter } from 'next/navigation'

type ClientsContextType = {
    client: Client | null
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string) => Promise<void>
    // updateClient: (id: number, data: Partial<Client>) => Promise<void>
    // deleteClient: (id: number) => Promise<void>
}

const router = useRouter()

const ClientsContext = createContext<ClientsContextType | undefined>(undefined)

export const ClientsProvider = ({ children }: {children: React.ReactNode}) => {
    const [client, setClient] = useState<Client | null>(null)

    useEffect(() => {
        if (!client) {
            console.log("manda para tela de login")
        }
    }, [])

    const login = async (email: string, password: string) => {
        try {
            const client = await clientsApi.login(email, password)
            if (client) {
                const newClient = await clientsApi.getById(client.id)
                setClient(newClient)
                router.push('/')
            }
        } catch (error) {
            console.error('Erro ao adicionar client:', error)
        }
    }

    const register = async (email: string, password: string) => {
        try {
            const client = await clientsApi.register(email, password)
            if (client) {
                const newClient = await clientsApi.getById(client.id)
                setClient(newClient)
                router.push('/')
            }
        } catch (error) {
            console.error('Erro ao adicionar task:', error)
        }
    }

    
    return (
        <ClientsContext.Provider value={{ client, login, register }}>
            {children}
        </ClientsContext.Provider>
    )
}

export const useClientsContext = () => {
    const context = useContext(ClientsContext)
    if(!context) throw new Error('useClientsContext deve estar dentro de <ClientsProvider>')
    return context
}