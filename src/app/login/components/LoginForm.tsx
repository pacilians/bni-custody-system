"use client";

// actions
import { login } from "../actions";

// component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";

// libs
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm();

  return (
    <div className="flex flex-col">
      <p className="mb-8 text-center text-3xl font-semibold">Custody System</p>
      <Form {...form}>
        <form
          action={async (formData: FormData) => {
            toast.promise(login(formData), {
              loading: "Logging in...",
              success: (data) => {
                form.reset();
                router.push("/");
                return `Login successful. Welcome back ${data.data.user.name}!`;
              },
              error: (err) => {
                return "Username or password is incorrect";
              },
            });
          }}
          className="flex w-full max-w-sm flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    {...field}
                    className="border-gray-200 bg-white px-5 dark:border-gray-900 dark:bg-gray-900/60"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    {...field}
                    className="border-gray-200 bg-white px-5 dark:border-gray-900 dark:bg-gray-900/60"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </Form>
    </div>
  );
}
