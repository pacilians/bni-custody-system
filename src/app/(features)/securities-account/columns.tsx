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
  nama: string;
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
  domisili: string;
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
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama/Nama Perusahaan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "nama_tengah",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Tengah
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const object = row.original;

      if (object.nama_tengah === "") {
        return <p>-</p>;
      }
      return <p>{object.nama_tengah}</p>;
    },
  },
  {
    accessorKey: "nama_belakang",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Belakang
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const object = row.original;

      if (object.nama_belakang === "") {
        return <p>-</p>;
      }
      return <p>{object.nama_belakang}</p>;
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
    cell: ({ row }) => {
      const object = row.original;

      if (object.ktp === "") {
        return <p>-</p>;
      }
      return <p>{object.ktp}</p>;
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
    cell: ({ row }) => {
      const object = row.original;

      if (object.npwp === "") {
        return <p>-</p>;
      }
      return <p>{object.npwp}</p>;
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
    cell: ({ row }) => {
      const object = row.original;

      if (object.no_paspor === "") {
        return <p>-</p>;
      }
      return <p>{object.no_paspor}</p>;
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
    cell: ({ row }) => {
      const object = row.original;

      if (object.no_pendaftaran_usaha === "") {
        return <p>-</p>;
      }
      return <p>{object.no_pendaftaran_usaha}</p>;
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
    accessorKey: "jenis_kelamin",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jenis Kelamin
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const object = row.original;

      if (object.jenis_kelamin === "") {
        return <p>-</p>;
      }
      return <p>{object.jenis_kelamin}</p>;
    },
  },
  {
    accessorKey: "jenis_pekerjaan",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jenis Pekerjaan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const object = row.original;

      if (object.jenis_pekerjaan === "") {
        return <p>-</p>;
      }
      return <p>{object.jenis_pekerjaan}</p>;
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
    cell: ({ row }) => {
      const object = row.original;

      if (object.no_telepon === "") {
        return <p>-</p>;
      }
      return <p>{object.no_telepon}</p>;
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
    cell: ({ row }) => {
      const object = row.original;

      if (object.email === "") {
        return <p>-</p>;
      }
      return <p>{object.email}</p>;
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
                const textData = `<Message>
<Record name="data">
<Field name="action">CREATION</Field>
<Field name="investorType">INSTITUTIONAL</Field>
<Field name="investorClientType">DIRECT</Field>
<Field name="accountLocalCode">BNI01</Field>
<Field name="accountClientCode"></Field>
<Field name="investorCompanyName"><![CDATA[IKATAN AKUNTAN INDONESIA]]></Field>
<Field name="investorCompanyBICCode"></Field>
<Field name="accountTaxCode">1012</Field>
<Field name="investorLegalDomicile">INDONESIA</Field>
<Field name="investorNPWPNumber">021923081071000</Field>
<Field name="investorNPWPRegistrationDate">20040708</Field>
<Field name="investorSKDNumber"></Field>
<Field name="investorSKDExpiredDate"></Field>
<Field name="investorCompanyEstablishmentPlace">${current.tempat_pendirian}</Field>
<Field name="investorCompanyEstablishmentDate">${current.tanggal_pendirian}</Field>
<Field name="investorAddress1"><![CDATA[${current.alamat_identitas_1}]]></Field>
<Field name="investorAddress2"><![CDATA[${current.alamat_identitas_2}]]></Field>
<Field name="investorAddress3"><![CDATA[]]></Field>
<Field name="investorCity">${current.kode_kota}</Field>
<Field name="investorProvince">${current.kode_provinsi}</Field>
<Field name="investorPostalCode">10310</Field>
<Field name="investorCountry">${current.kode_negara}</Field>
<Field name="investorHomePhone">${current.no_telepon}</Field>
<Field name="investorMobilePhone">${current.no_hp}</Field>
<Field name="investorEmail">${current.email}</Field>
<Field name="investorFax"></Field>
<Field name="investorOtherAddress1"><![CDATA[]]></Field>
<Field name="investorOtherAddress2"><![CDATA[]]></Field>
<Field name="investorOtherAddress3"><![CDATA[]]></Field>
<Field name="investorOtherCity"></Field>
<Field name="investorOtherProvince"></Field>
<Field name="investorOtherPostalCode"></Field>
<Field name="investorOtherCountry"></Field>
<Field name="investorOtherHomePhone"></Field>
<Field name="investorOtherMobilePhone"></Field>
<Field name="investorOtherEmail"></Field>
<Field name="investorOtherFax"></Field>
<Field name="investorBusinessType">3</Field>
<Field name="investorCompanyCharacteristic">1</Field>
<Field name="investorFundSource">3</Field>
<Field name="investorFundSourceText"></Field>
<Field name="investorArticleOfAssociation">51</Field>
<Field name="investorBusinessRegistrationCertificateNumber"></Field>
<Field name="investorAuthorizedPersonFirstName1"><![CDATA[ELLY]]></Field>
<Field name="investorAuthorizedPersonMiddleName1"><![CDATA[ZARNI]]></Field>
<Field name="investorAuthorizedPersonLastName1"><![CDATA[HUSIN]]></Field>
<Field name="investorAuthorizedPersonPosition1"><![CDATA[DIREKTUR EKSEKUTIF]]></Field>
<Field name="investorAuthorizedPersonKTPNumber1">3276014309760014</Field>
<Field name="investorAuthorizedPersonKTPExpiredDate1">20990903</Field>
<Field name="investorAuthorizedPersonNPWPNumber1"></Field>
<Field name="investorAuthorizedPersonNPWPRegistrationDate1"></Field>
<Field name="investorAuthorizedPersonPassportNumber1"></Field>
<Field name="investorAuthorizedPersonPassportExpiredDate1"></Field>
<Field name="investorAuthorizedPersonKitasSKDNumber1"></Field>
<Field name="investorAuthorizedPersonKitasSKDExpiredDate1"></Field>
<Field name="investorAuthorizedPersonFirstName2"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonMiddleName2"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonLastName2"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonPosition2"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonKTPNumber2"></Field>
<Field name="investorAuthorizedPersonKTPExpiredDate2"></Field>
<Field name="investorAuthorizedPersonNPWPNumber2"></Field>
<Field name="investorAuthorizedPersonNPWPRegistrationDate2"></Field>
<Field name="investorAuthorizedPersonPassportNumber2"></Field>
<Field name="investorAuthorizedPersonPassportExpiredDate2"></Field>
<Field name="investorAuthorizedPersonKitasSKDNumber2"></Field>
<Field name="investorAuthorizedPersonKitasSKDExpiredDate2"></Field>
<Field name="investorAuthorizedPersonFirstName3"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonMiddleName3"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonLastName3"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonPosition3"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonKTPNumber3"></Field>
<Field name="investorAuthorizedPersonKTPExpiredDate3"></Field>
<Field name="investorAuthorizedPersonNPWPNumber3"></Field>
<Field name="investorAuthorizedPersonNPWPRegistrationDate3"></Field>
<Field name="investorAuthorizedPersonPassportNumber3"></Field>
<Field name="investorAuthorizedPersonPassportExpiredDate3"></Field>
<Field name="investorAuthorizedPersonKitasSKDNumber3"></Field>
<Field name="investorAuthorizedPersonKitasSKDExpiredDate3"></Field>
<Field name="investorAuthorizedPersonFirstName4"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonMiddleName4"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonLastName4"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonPosition4"><![CDATA[]]></Field>
<Field name="investorAuthorizedPersonKTPNumber4"></Field>
<Field name="investorAuthorizedPersonKTPExpiredDate4"></Field>
<Field name="investorAuthorizedPersonNPWPNumber4"></Field>
<Field name="investorAuthorizedPersonNPWPRegistrationDate4"></Field>
<Field name="investorAuthorizedPersonPassportNumber4"></Field>
<Field name="investorAuthorizedPersonPassportExpiredDate4"></Field>
<Field name="investorAuthorizedPersonKitasSKDNumber4"></Field>
<Field name="investorAuthorizedPersonKitasSKDExpiredDate4"></Field>
<Field name="investorAsset1">2</Field>
<Field name="investorAsset2">2</Field>
<Field name="investorAsset3">2</Field>
<Field name="investorOperatingProfit1">1</Field>
<Field name="investorOperatingProfit2">1</Field>
<Field name="investorOperatingProfit3">1</Field>
<Field name="accountDescription"><![CDATA[]]></Field>
<Field name="investorBankAccountName1"></Field>
<Field name="investorBankAccountNumber1"></Field>
<Field name="investorBankAccountBICCode1"></Field>
<Field name="investorBankAccountHolderName1"><![CDATA[]]></Field>
<Field name="investorBankAccountCurrency1"></Field>
<Field name="investorBankAccountName2"></Field>
<Field name="investorBankAccountNumber2"></Field>
<Field name="investorBankAccountBICCode2"></Field>
<Field name="investorBankAccountHolderName2"><![CDATA[]]></Field>
<Field name="investorBankAccountCurrency2"></Field>
<Field name="investorBankAccountName3"></Field>
<Field name="investorBankAccountNumber3"></Field>
<Field name="investorBankAccountBICCode3"></Field>
<Field name="investorBankAccountHolderName3"><![CDATA[]]></Field>
<Field name="investorBankAccountCurrency3"></Field>
<Field name="investorInvestmentObjective">3</Field>
<Field name="DirectSid"></Field>
<Field name="AssetOwner">1</Field>
<Field name="investorTypeOfSupplementaryDocs">1</Field>
<Field name="investorExpiredDateOfSupplementaryDocs">20990324</Field>
</Record>
</Message>`;
                const blob = new Blob([textData], { type: "text/plain" });
                const downloadLink = document.createElement("a");
                downloadLink.download = `${current.nama}.txt`;
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
