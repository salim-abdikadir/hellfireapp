"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { startTransition, useState } from "react";
import { Button } from "./ui/button";
import { toggleTodoServer } from "@/actions/todos";
import { Loader } from "lucide-react";
import { toast } from "sonner";

type Props = {
  todos: { id: number; title: string; completed: boolean }[];
};
const TodoList = ({ todos }: Props) => {
  const [isLoading, setisLoading] = useState(false);
  const submitClick = (id: number, toggler: boolean) => {
    setisLoading(true);
    startTransition(async () => {
      await toggleTodoServer(id, toggler);
      setisLoading(false);
      toast.success("Todo updated", {
        duration: 1000,
        style: {
          background: "#00dd00",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "20px 40px",
        },
        dismissible: true,
        closeButton: true,
        cancelButtonStyle: {
          background: "#555",
          color: "#fff",
          left: 10,
          top: 10,
        },
      });
    });
  };
  return (
    <ul className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 w-full h-full bg-white opacity-50 flex items-center justify-center">
          <Loader size={40} className="animate-spin" />
        </div>
      )}
      {todos.map((todo) => (
        <li
          onClick={() => submitClick(todo.id, !todo.completed)}
          className={cn(
            "flex select-none cursor-pointer items-center gap-3  text-primary-foreground  p-3 rounded-md mb-2 hover:opacity-90 hover:scale-100 transition-all hover:shadow-2xl",
            todo.completed ? "bg-green-300" : "bg-yellow-500"
          )}
          key={todo.id}
        >
          <span className="flex-grow">
            {todo.title} {todo.completed ? "(Completed)" : "(pending)"}
          </span>
          <Button variant={"primary"}>
            <Link href={`/todos/${todo.id}`}>View</Link>
          </Button>
          <Button variant={"secondary"}>
            <Link href={`/todos/${todo.id}/edit`}>Edit</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
