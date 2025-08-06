import Header from "@/components/Header";
import TaskCardList from "@/components/TaskCardList";
import { Plus } from "lucide-react";

export default async function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
      <div className="h-full min-w-xl flex flex-col items-center bg-gray-100 p-8 rounded-xl">
        <Header />
        <div className="w-full flex flex-row items-center rounded-4xl bg-gray-200 mt-4">
          <input 
            placeholder="Add your task" 
            className="w-full  p-2 px-4 placeholder-gray-400 text-xl" />
            
          <Plus className="bg-green-500 rounded-full text-gray-700 w-11 h-11 p-2 cursor-pointer" strokeWidth={3.5} />
        </div>
        <TaskCardList />
      </div>
    </div>
  );
}
