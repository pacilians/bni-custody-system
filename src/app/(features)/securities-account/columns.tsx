"use client";

import { deleteSecurities } from "./actions";

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
import dayjs from "dayjs";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

export type Securities = {
  id: any;
  id_customer: string;
  kode_bk: string;
  no_rekening_investor: string;
  nama_perusahaan: string;
  nama_awal: string;
  nama_tengah: string;
  nama_belakang: string;
  ktp: string;
  npwp: string;
  no_paspor: string;
  no_pendaftaran_usaha: string;
  tanggal_pendirian: any;
  tempat_pendirian: any;
  tipe_investor: string;
  jenis_kelamin: string;
  jenis_pekerjaan: string;
  alamat_identitas_1: string;
  alamat_identitas_2: string;
  kode_kota: string;
  kode_provinsi: string;
  kode_negara: string;
  no_telepon: string;
  no_hp: string;
  email: string;
};

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
    accessorKey: "nama_perusahaan",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Perusahaan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "nama_awal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Awal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "ktp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          KTP
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "npwp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NPWP
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "no_paspor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          No Paspor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "no_pendaftaran_usaha",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          No Pendaftaran Usaha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "tanggal_pendirian",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Pendirian
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const now = row.getValue("tanggal_pendirian");
      const formatted = dayjs(now as string).format("DD/MM/YYYY HH:mm:ss");
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "tempat_pendirian",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tempat Pendirian
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "tipe_investor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipe Investor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "no_telepon",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          No Telp
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const current = row.original;
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
              onClick={() => {
                const textData =
                  current.kode_bk +
                  "|" +
                  current.no_rekening_investor +
                  "|" +
                  (current.nama_perusahaan ||
                    current.nama_awal +
                      (current.nama_tengah
                        ? " " + current.nama_tengah + " "
                        : " ") +
                      current.nama_belakang) +
                  "|" +
                  current.ktp +
                  "|" +
                  current.npwp +
                  "|" +
                  current.no_paspor +
                  "|" +
                  current.no_pendaftaran_usaha +
                  "|" +
                  current.tempat_pendirian +
                  "|" +
                  current.tanggal_pendirian +
                  "|" +
                  current.kode_negara +
                  "|" +
                  current.tipe_investor +
                  "|" +
                  current.jenis_kelamin +
                  "|" +
                  current.jenis_pekerjaan +
                  "|" +
                  current.alamat_identitas_1 +
                  "|" +
                  current.alamat_identitas_2 +
                  "|" +
                  current.kode_kota +
                  "|" +
                  current.kode_provinsi +
                  "|" +
                  current.kode_negara +
                  "|" +
                  current.no_telepon +
                  "|" +
                  current.no_hp +
                  "|" +
                  current.email;
                const blob = new Blob([textData], { type: "text/plain" });
                const downloadLink = document.createElement("a");
                downloadLink.download = `${current.nama_perusahaan}.txt`;
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                return;
              }}
            >
              Generate txt
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                alert("[ON DEVELOPMENT]");
              }}
            >
              Update Securities
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                toast.promise(deleteSecurities(current.id), {
                  loading: "Deleting...",
                  success: (data) => {
                    return `Successfull delete sc account`;
                  },
                  error: (err) => {
                    const errorObj = JSON.parse(err.message);
                    return `Failed delete sc account`;
                  },
                });
                window.location.reload();
                return;
              }}
            >
              Delete Securities
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
