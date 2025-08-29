"use client";
import { TodoSchema } from "@/lib/validators";
import React, { startTransition } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { saveTodoServer } from "@/actions/todos";

const TodoForm: React.FC = () => {
  const form = useForm<TodoSchema>({
    defaultValues: {
      title: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: TodoSchema) => {
    setIsLoading(true);
    try {
      await saveTodoServer(data);
      form.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="title">Title</FormLabel>
              <FormControl>
                <Input id="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="btn btn-primary"
        >
          {isLoading ? "Saving..." : "Add Todo"}
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
