'use client'

import { useClientsContext } from "@/context/ClientsContext"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
    const router = useRouter()

    const { client, login } = useClientsContext()

    const handleSubmit = async () => {
        await login(email, password)
    }

    return (
        <div className="min-h-screen w-full bg-cyan-600 flex items-center justify-center">
            <div className="h-full max-w-xs md:min-w-md flex flex-col gap-3 bg-gray-100 p-8 rounded-2xl text-gray-600">
                <h1 className="text-4xl text-gray-950 font-extrabold">Log in</h1>
                <div className="flex flex-col gap-3 pt-4">
                    <input 
                    value={email}
                    type="text"
                    className="outline-none border-1 border-gray-400 placeholder-gray-500 rounded-lg p-3"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>

                    <div className="flex flex-row justify-between items-center border-1 border-gray-400 rounded-lg p-3">
                        <input 
                            type={passwordVisible ? 'text' :  'password'}
                            className="outline-none  placeholder-gray-500  "
                            placeholder='Password' 
                            onChange={(e) => setPassword(e.target.value)}/>

                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {passwordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>
                        

                    <input 
                        type='submit'
                        value='Log in'
                        className='bg-cyan-600 text-white text-2xl p-3 mt-3 rounded-md font-semibold' 
                        onClick={handleSubmit}/>
                </div>
                <button>
                    <span className="text-xl font-semibold" onClick={() => router.push('/register')}>
                        or, sign up
                    </span>
                </button>
            </div>
        </div>
    )
}