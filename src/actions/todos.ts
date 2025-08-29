'use server';
import { TodoSchema, todoSchema } from "@/lib/validators";
import {prisma} from "@/lib/db";
import { revalidateTag } from "next/cache";


export async function saveTodoServer(data: TodoSchema) {
    // Implement your logic to save the todo here
    // For example, call your saveTodo function or interact with a database
    // return await saveTodo(title);

    // Placeholder implementation:
    await new Promise(resolve => setTimeout(resolve, 1000));
    const safeData = todoSchema.parse(data);
    const todo = await prisma.todo.create({
        data: {
            title: safeData.title,
            completed: false,
        },
    });
    revalidateTag("todos");
    return todo;    
}
export async function toggleTodoServer(id: number, completed: boolean) {
    // Implement your logic to save the todo here
    // For example, call your saveTodo function or interact with a database
    // return await saveTodo(title);
    const todo = await prisma.todo.update({
        where: { id },
        data: { completed },
    });
    revalidateTag("todos");
    return todo;    
}
export async function deleteTodoServer(id: number) {
    // Implement your logic to save the todo here
    // For example, call your saveTodo function or interact with a database
    // return await saveTodo(title);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const todo = await prisma.todo.delete({
        where: { id },
    });
    revalidateTag("todos");
    return todo;    
}   