"use client";

// actions
import { deleteFile } from "../actions";

// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// libs
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";

export type File = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  exist: number;
};

export const columns = <TData extends {}>(
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
): ColumnDef<TData>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          File name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created at
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const createdAt = row.getValue("created_at");
      const formatted = dayjs(createdAt as string).format(
        "DD/MM/YYYY HH:mm:ss",
      );
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last modified
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const updatedAt = row.getValue("updated_at");
      if (updatedAt === null) {
        const createdAt = row.getValue("created_at");
        const formatted = dayjs(createdAt as string).format(
          "DD/MM/YYYY HH:mm:ss",
        );
        return <div>{formatted}</div>;
      }
      const formatted = dayjs(updatedAt as string).format(
        "DD/MM/YYYY HH:mm:ss",
      );
      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const file = row.original as any;

      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="translate-x-5 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <i className="i-ph-trash size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to delete {file.name}?
              </DialogTitle>
            </DialogHeader>
            <DialogFooter className="flex">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-32"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Close
                </Button>
              </DialogClose>
              <Button
                variant="destructive"
                className="w-32"
                onClick={(e) => {
                  e.stopPropagation();
                  toast.promise(deleteFile(file.id), {
                    loading: `Deleting ${file.name}...`,
                    success: () => {
                      setOpen(false);
                      return `Successfully deleted ${file.name}!`;
                    },
                    error: (err) => `Failed to delete file: ${err.message}`,
                  });
                }}
              >
                Delete file
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
