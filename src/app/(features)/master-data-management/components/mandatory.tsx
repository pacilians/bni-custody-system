"use client";
import {
  handleAddMandatory,
  handleDeleteMandatory,
  handleEdiMandatory,
} from "../actions";

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

type MandatoryFile = {
  id: number;
  name: string;
};

export default function Mandatory({ initialData }: any) {
  const [data, setData] = useState<MandatoryFile[]>([]);
  const router = useRouter();
  const form = useForm();
  const { pending } = useFormStatus();

  useEffect(() => {
    setData(initialData);
  }, [initialData]);
  return (
    <div className="">
      <div className="bg-base-200 h-full w-full rounded-3xl p-10 shadow-md">
        <div className="flex items-center justify-between pb-2">
          <h1 className="mb-4 text-xl font-bold">Mandatory File Category</h1>
          {/* Add Mandatory File */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">+</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Mandatory File</DialogTitle>
                <DialogDescription>
                  A file that customer must have
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  action={async (formData: FormData) => {
                    toast.promise(handleAddMandatory(formData), {
                      loading: "Creating...",
                      success: (data) => {
                        router.refresh();
                        return "Sucessful add mandatory file";
                      },
                      error: (err) => {
                        return `Failed add mandatory file`;
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
                            placeholder="Form X..."
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
                      Add Mandatory
                    </Button>
                  </DialogClose>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className="mb-2 flex w-full items-center justify-between"
            >
              <div className="flex">
                <span className="mr-2">📄</span> {}
                <span className="mr-4 flex justify-start">{item.name}</span>
              </div>
              <div className="flex items-end justify-center gap-2">
                {/* Edit Mandatory Files */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">✏️</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Update Mandatory File</DialogTitle>
                      <DialogDescription>
                        A file that customer must have
                      </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                      <form
                        action={async (formData: FormData) => {
                          toast.promise(handleEdiMandatory(formData, item), {
                            loading: "Updating...",
                            success: (data) => {
                              router.refresh();
                              return "Sucessful update mandatory file";
                            },
                            error: (err) => {
                              return `Failed update mandatory file`;
                            },
                          });
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
                                  placeholder="Form X..."
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
                            Add Mandatory
                          </Button>
                        </DialogClose>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
                {/* Edit Mandatory Files */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">❌</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Delete Mandatory File</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this mandatory file? All
                        files related to this will be deleted in the customers
                        file.
                      </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                      <form
                        action={async (formData: FormData) => {
                          toast.promise(handleDeleteMandatory(item), {
                            loading: "Deleting...",
                            success: (data) => {
                              router.refresh();
                              return "Sucessful delete mandatory file";
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
                            className="group mt-6 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
                            aria-disabled={pending}
                            disabled={pending}
                          >
                            Delete Mandatory
                          </Button>
                        </DialogClose>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
              <></>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
