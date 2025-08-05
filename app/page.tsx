import { clientsApi } from "@/lib/api/client";
import Image from "next/image";
import Header from "@/components/Header";
import TaskCardList from "@/components/TaskCardList";
import { Plus } from "lucide-react";

export default async function Home() {
  const clients = await clientsApi.getAll()

  return (
    <div className="h-full w-full flex flex-col items-center py-8">
      <Header />
      <div className="flex flex-row items-center">
        <input placeholder="Add your task" className="rounded-4xl p-2 px-4 mt-4 bg-neutral-400"/>
        <Plus className="bg-green-600 rounded-full text-gray-700 w-12 h-12 p-2" strokeWidth={3.5} />
      </div>
      <TaskCardList />
    </div>
  );
}
