"use client";
import {deleteSecurities} from "./actions";

// components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// libs
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

export interface Securities {
    id: null,
    id_customer: string,
    kode_bk: string,
    no_rekening_investor: string,
    nama_perusahaan: string,
    nama_awal: string,
    nama_tengah: string,
    nama_belakang: string,
    ktp: string,
    npwp: string,
    no_paspor: string,
    no_pendaftaran_usaha: string,
    tanggal_pendirian: any,
    tempat_pendirian: any,
    tipe_investor: string,
    jenis_kelamin: string,
    jenis_pekerjaan: string,
    alamat_identitas_1: string,
    alamat_identitas_2: string,
    kode_kota: string,
    kode_provinsi: string,
    kode_negara: string,
    no_telepon: string,
    no_hp: string,
    email: string,
  }



  export const columns: ColumnDef<Securities>[] = [
    {
      accessorKey: "kode_bk",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Kode BK
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "no_rekening_investor",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            No Rekening Investor
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const customer = row.original;
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                // onClick={() => navigator.clipboard.writeText(customer.id)}
              >
                Copy customer ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View customer details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  
  