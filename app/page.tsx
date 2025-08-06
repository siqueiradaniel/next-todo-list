import AddTaskInput from "@/components/AddTaskInput";
import Header from "@/components/Header";
import TaskCardList from "@/components/TaskCardList";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
      <div className="h-full min-w-xl flex flex-col items-center bg-gray-100 p-8 rounded-xl">
        <Header />
        <AddTaskInput />
        <TaskCardList />
      </div>
    </div>
  );
}
