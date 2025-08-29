import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { LucideRecycle } from "lucide-react";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4 flex flex-col ">
      <div className="w-full max-w-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Todos Page</h1>
        <p className="text-gray-600">This is the todos page.</p>
      </div>
      <TodoForm />
      <Suspense fallback={<LoadingComponent />}>
        <TodosComponent />
      </Suspense>
    </main>
  );
};

const TodosComponent = async () => {
  "use cache";
  cacheTag("todos");
  const todos = await prisma.todo.findMany();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <TodoList todos={todos} />
      </CardContent>
    </Card>
  );
};

const LoadingComponent = () => {
  return (
    <LucideRecycle className="animate-spin flex items-center justiy-center" />
  );
};
export default Page;
