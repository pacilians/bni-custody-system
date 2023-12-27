"use client";

// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//   libs
import { useForm } from "react-hook-form";

export default function UploadFileDialog() {
  const form = useForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-1.5 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600">
          <i className="i-ph-upload-simple-bold size-4" />
          <p>Upload file</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            action={async (formData: FormData) => {
              //   toast.promise(login(formData), {
              //     loading: "Logging in...",
              //     success: (data) => {
              //       router.push("/database");
              //       return `Login successful. Welcome back, ${data.data.user.name}!`;
              //     },
              //     error: (err) => {
              //       const errorObj = JSON.parse(err.message);
              //       return `Login failed: ${errorObj.message}`;
              //     },
              //   });
            }}
            className="flex w-full max-w-sm flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="fileType"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1.5">
                  <FormLabel>File type</FormLabel>
                  <FormControl>
                    <Tabs
                      onValueChange={field.onChange}
                      defaultValue="mandatory"
                      className="flex flex-col space-y-1"
                    >
                      <TabsList>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <TabsTrigger value="mandatory">
                              Mandatory
                            </TabsTrigger>
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <TabsTrigger value="additional">
                              Additional
                            </TabsTrigger>
                          </FormControl>
                        </FormItem>
                      </TabsList>
                    </Tabs>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="fileType">File</Label>
              <Tabs defaultValue="mandatory" className="w-full">
                <TabsList>
                  <TabsTrigger value="mandatory">Mandatory</TabsTrigger>
                  <TabsTrigger value="additional">Additional</TabsTrigger>
                </TabsList>
                <TabsContent value="mandatory">
                  <Input id="fileType" type="text" required />
                </TabsContent>
                <TabsContent value="additional">
                  <Input id="fileType" type="text" required />
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="file">File</Label>
              <Input id="file" type="file" required />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
