"use client";
import { handleAddService, handleDeleteService } from "../actions";

// componets
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Service = {
  id: number;
  name: string;
};

export default function Service({ initialData }: any) {
  const [data, setData] = useState<Service[]>([]);
  const router = useRouter();
  const form = useForm();
  const { pending } = useFormStatus();

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <section className="bg-base-200 basis-1/2 rounded-3xl p-10 shadow-md">
      <div className="flex items-center justify-between pb-2">
        <h1 className="mb-4 text-xl font-bold">Service Category</h1>
        {/* Add Service */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">+</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Service Category</DialogTitle>
              <DialogDescription>
                Service Category for Customer
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                action={async (formData: FormData) => {
                  toast.promise(handleAddService(formData), {
                    loading: "Creating...",
                    success: (data) => {
                      router.refresh();
                      return "Sucessful add service category";
                    },
                    error: (err) => {
                      return `Failed add service category`;
                    },
                  });
                  form.reset();
                }}
                className="flex w-full max-w-sm flex-col gap-3"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1.5">
                      <FormControl>
                        <Input
                          placeholder="Service X..."
                          className="border-gray-200 bg-white px-5 dark:border-gray-900 dark:bg-gray-900/60"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogClose asChild>
                  <Button
                    type="submit"
                    variant="ghost"
                    className="group mt-6 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
                    aria-disabled={pending}
                    disabled={pending}
                  >
                    Add Service
                  </Button>
                </DialogClose>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {data.map((ctx: Service, index: number) => {
        return (
          <div
            className="badge badge-outline group relative hover:text-transparent"
            key={index}
          >
            {ctx.name}

            {/* Delete Service */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl border border-gray-300 text-xs text-gray-600 opacity-0 group-hover:opacity-100"
                  variant="outline"
                >
                  x
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Delete Service Category</DialogTitle>
                  <DialogDescription>
                    Are you sure want delete this service
                  </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                  <form
                    action={async (formData: FormData) => {
                      toast.promise(handleDeleteService(ctx), {
                        loading: "Deleting...",
                        success: (data) => {
                          router.refresh();
                          return "Sucessful delete service category";
                        },
                        error: (err) => {
                          const errorObj = JSON.parse(err.message);
                          return `failed: ${errorObj.message}`;
                        },
                      });
                    }}
                    className="flex w-full max-w-sm flex-col gap-3"
                  >
                    <DialogClose asChild>
                      <Button
                        type="submit"
                        variant="ghost"
                        className="group mt-2 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
                        aria-disabled={pending}
                        disabled={pending}
                      >
                        Delete Service
                      </Button>
                    </DialogClose>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        );
      })}
    </section>
  );
}
