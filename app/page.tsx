import { clientsApi } from "@/lib/api/client";
import Image from "next/image";
import Header from "@/components/Header";
import TaskCardList from "@/components/TaskCardList";

export default async function Home() {
  const clients = await clientsApi.getAll()

  return (
    <div className="h-full w-full flex flex-col items-center py-8">
      <Header />
      <TaskCardList />
    </div>
  );
}
