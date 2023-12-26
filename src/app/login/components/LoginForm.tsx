"use client";

// actions
import { login } from "../actions";

// component
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// libs
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginForm() {
  const form = useForm();
  const router = useRouter();

  return (
    <Form {...form}>
      <form
        action={async (formData: FormData) => {
          toast.promise(login(formData), {
            loading: "Logging in...",
            success: (data) => {
              router.push("/database");
              return `Login successful. Welcome back, ${data.data.user.name}!`;
            },
            error: (err) => {
              const errorObj = JSON.parse(err.message);
              return `Login failed: ${errorObj.message}`;
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
        <Button
          type="submit"
          variant="ghost"
          className="group mt-6 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
        >
          <p className="translate-x-[13px] group-hover:translate-x-0">Log in</p>
          <i className="i-ph-arrow-circle-right size-5 -translate-x-[13px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
        </Button>
      </form>
    </Form>
  );
}
