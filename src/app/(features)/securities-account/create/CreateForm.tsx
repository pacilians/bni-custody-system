"use client";

// import { addCustomer } from "../actions";
// import { BankAccount, DOB } from "../components/Columns";

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
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Service = {
  id: number;
  name: string;
};

export default function CreateForm({ service, business }: any) {
  const router = useRouter();
  const form = useForm();
  const { pending } = useFormStatus();


  return (
    <section className="bg-base-200 flex-column flex w-full justify-center rounded-3xl p-10 shadow-md">
      <Form {...form}>
        <form
          action={async (formData: FormData) => {
            // toast.promise(addCustomer(formData, bod, bankAccount), {
            //   loading: "Creating..",
            //   success: (data) => {
            //     router.push("/database");
            //     return `Successfull creating customer`;
            //   },
            //   error: (err) => {
            //     return `Failed creating customer`;
            //   },
            // });
          }}
          className="flex w-full flex-col gap-2"
        >
          <div className="flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Name *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="Name"
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="adress"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Address *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="JL...."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Telephone *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="62..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="email">
                    Email *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="@x.com"
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expiry_date"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Expiry Date
                  </label>
                  <Input
                    type="date"
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birth_date"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Birth Date *
                  </label>
                  <Input
                    type="date"
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="key_person_name"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="email">
                    Key Person Name *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="Name KP"
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="key_person_dob"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Key Person Birth Date *
                  </label>
                  <Input
                    type="date"
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="key_person_hp"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Key Person Telp *
                  </label>
                  <Input
                    type="text"
                    placeholder="62..."
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="role">
                    Service *
                  </label>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Services" />
                    </SelectTrigger>
                    <SelectContent>
                      {service.map((obj: any, key: any) => (
                        <SelectItem key={key} value={obj.name}>
                          {obj.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="business_category"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="role">
                    Business *
                  </label>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Business" />
                    </SelectTrigger>
                    <SelectContent>
                      {business.map((obj: any, key: any) => (
                        <SelectItem key={key} value={obj.name}>
                          {obj.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>


          <div className="flex flex-row justify-center">
            <Button
              type="submit"
              className="group mt-6 w-60 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
              aria-disabled={pending}
              disabled={pending}
            >
              Add Customer
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
