"use client";

// actions
import { getFile } from "../actions";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { columns as getColumns } from "./Columns";

// libs
import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { toast } from "sonner";

interface DataTableProps<TData, TValue> {
  data: TData[];
  searchParameter?: string;
  links?: boolean;
  create?: JSX.Element;
}

export function DataTable<TData extends {}, TValue>({
  data,
  searchParameter,
  links = false,
  create,
}: Readonly<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [open, setOpen] = useState(false);
  const columns = getColumns<TData>(open, setOpen);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      {searchParameter && (
        <div className="flex items-center justify-between py-4">
          <Input
            placeholder={`Search ${searchParameter}...`}
            value={
              (table.getColumn(searchParameter)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(searchParameter)
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          {create}
        </div>
      )}
      <div className="rounded-md border border-gray-300 *:*:*:*:border-gray-300 dark:border-gray-800 *:*:*:*:dark:border-gray-800">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (links) {
                      const item = row.original as any;
                      toast.promise(getFile(item.id), {
                        loading: `Opening ${item.name}...`,
                        success: (data) => {
                          const buffer = new Uint8Array(
                            data.data.files.file.data,
                          );
                          const blob = new Blob([buffer], {
                            type: "application/pdf",
                          });
                          const url = URL.createObjectURL(blob);
                          window.open(url, "_ blank");
                          return `Opened ${item.name}`;
                        },
                        error: (err) => `Failed to load file: ${err.message}`,
                      });
                    }
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
