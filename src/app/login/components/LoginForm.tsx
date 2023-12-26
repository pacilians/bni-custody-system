"use client";

// actions
import { login } from "../action";

// component
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
              router.push("/dashboard");
              return `Login successful. Welcome back, ${data.data.user.name}!`;
            },
            error: (err) => {
              const errorObj = JSON.parse(err.message);
              return `Login failed: ${errorObj.message}`;
            },
          });
        }}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" required {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
