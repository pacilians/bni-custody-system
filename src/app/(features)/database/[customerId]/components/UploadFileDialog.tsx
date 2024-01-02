"use client";

// actions
import { uploadFile } from "../actions";

// components
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadFileButton from "./UploadFileButton";

//   libs
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// utils
import { cn } from "@/lib/utils";

export type MasterDataItem = {
  id: number;
  name: string;
};

export default function UploadFileDialog({
  masterData,
}: Readonly<{
  masterData: MasterDataItem[];
}>) {
  const form = useForm();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1.5 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600">
          <i className="i-ph-upload-simple-bold size-4" />
          <p>Upload file</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload new file</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            action={async (formData: FormData) => {
              toast.promise(uploadFile(formData), {
                loading: "Uploading file...",
                success: (data) => {
                  setOpen(false);
                  form.reset();
                  return `${data.data.name} successfully uploaded!`;
                },
                error: (err) => {
                  const errorObj = JSON.parse(err.message);
                  return `Upload failed: ${errorObj.message}`;
                },
              });
            }}
            className="flex w-full flex-col gap-3"
          >
            <Tabs defaultValue="mandatory" className="w-full">
              <TabsList className="mb-5 flex">
                <TabsTrigger value="mandatory" className="grow">
                  Mandatory
                </TabsTrigger>
                <TabsTrigger value="password" className="grow">
                  Additional
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mandatory">
                <FormField
                  control={form.control}
                  name="mandatoryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mandatory file type</FormLabel>
                      <Select {...field} required>
                        <SelectTrigger
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "justify-between",
                          )}
                        >
                          <SelectValue placeholder="Select type..." />
                        </SelectTrigger>
                        <SelectContent>
                          {masterData.map((masterDataItem: any) => (
                            <SelectItem
                              key={masterDataItem.id}
                              value={masterDataItem.name}
                              className="cursor-pointer"
                            >
                              {masterDataItem.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="file">File</FormLabel>
                  <FormControl className="flex flex-col gap-1.5">
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf"
                      max-size="5242880"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please only upload PDFs. Maximum 5mb.
                  </FormDescription>
                </FormItem>
              )}
            />
            <UploadFileButton />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
