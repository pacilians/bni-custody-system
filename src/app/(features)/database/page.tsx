// actions
import { getData } from "./actions";

// components
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/Columns";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database | BNI Custody System",
  description: "Database of BNI custody system",
};

export default async function Database() {
  const data = await getData();

  return (
    <main className="relative flex min-h-svh grow flex-col p-20">
      <DataTable
        columns={columns}
        data={data.data.customers}
        searchParameter="name"
      />
    </main>
  );
}
