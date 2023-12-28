"use client";

import { createUser } from "../actions";

// componets
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// libs
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Service = {
  id: number;
  name: string;
};

export default function CreateForm({ initialData }: any) {
  const [data, setData] = useState<Service[]>([]);
  const router = useRouter();
  const form = useForm();
  const { pending } = useFormStatus();

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <section className="bg-base-200 flex w-full justify-center rounded-3xl p-10 shadow-md">
      <Form {...form}>
        <form
          action={async (formData: FormData) => {
            toast.promise(createUser(formData), {
              loading: "Cerating..",
              success: (data) => {
                router.push("/user-management");
                return `Successfull creating user`;
              },
              error: (err) => {
                const errorObj = JSON.parse(err.message);
                return `Failed creating user`;
              },
            });
          }}
          className="flex w-full max-w-lg flex-col gap-2"
        >
          <div className="flex flex-row justify-between gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Name *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="Name"
                    {...field}
                    className="border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="npp"
              render={({ field }) => (
                <FormItem>
                  <label className="mb-2 block font-bold" htmlFor="npp">
                    npp *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="npp"
                    {...field}
                    className="border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <label className="mb-2 block font-bold" htmlFor="role">
                  Role *
                </label>
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="hoc">HOC</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <label className="mb-2 block font-bold" htmlFor="desc">
                  Description *
                </label>
                <Input
                  type="text"
                  required
                  placeholder="Description"
                  {...field}
                  className="border-gray-200 bg-white px-5 dark:border-gray-900 dark:bg-gray-900/60"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label className="mb-2 block font-bold" htmlFor="email">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  placeholder="Email"
                  {...field}
                  className="border-gray-200 bg-white px-5 dark:border-gray-900 dark:bg-gray-900/60"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row justify-center">
            <Button
              type="submit"
              className="group mt-6 w-60 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
              aria-disabled={pending}
              disabled={pending}
            >
              Add User
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
