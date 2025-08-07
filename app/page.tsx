'use client'

import AddTaskInput from "@/components/AddTaskInput";
import Header from "@/components/Header";
import TaskCardList from "@/components/TaskCardList";
import { useClientsContext } from "@/context/ClientsContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { client } = useClientsContext()
  const router = useRouter() 
  
  console.log(client)
  if (!client) router.push('/login')

  return (
    <div className="min-h-screen w-full bg-cyan-600 flex items-center justify-center">
      <div className="h-full max-w-2xs md:min-w-xl flex flex-col items-center bg-gray-100 p-8 rounded-xl">
        <Header />
        <AddTaskInput />
        <TaskCardList />
      </div>
    </div>
  );
}
