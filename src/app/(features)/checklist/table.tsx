"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ArrowUpDown } from "lucide-react";

const TableChecklist = ({ column, data }: any) => {
  function processData(colom: string[], checklist: any) {
    let fixData: any = [];

    checklist.forEach((ctx: any) => {
      let current: any = {
        name: ctx.name,
      };

      colom.forEach((item) => {
        current[item] = ctx["check"][item];
      });

      fixData.push(current);
    });

    let columns = [
      {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Customer
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
      },
    ];

    colom.forEach((item) => {
      columns.push({
        accessorKey: item,
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              {item}
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const object = row.original;
          if (object[item] === 1) {
            return (
              <span className="checkmark" style={{ color: "green" }}>
                &#x2713;
              </span>
            );
          } else {
            return <span className="cross">&#x274C;</span>;
          }
        },
      });
    });
    {
    }
    return {
      colom: columns,
      data: fixData,
    };
  }

  const process = processData(column, data);

  const colom = process.colom;
  const list = process.data;

  return (
    <DataTable
      columns={colom}
      data={list}
      searchParameter="name"
      links={false}
    />
  );
};

export default TableChecklist;
