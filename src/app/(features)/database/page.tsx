// actions
import { getData } from "./actions";

// components
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/Columns";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database | Custody System",
  description: "Database of custody system",
};

export default async function Database() {
  const data = await getData();

  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <DataTable
        columns={columns}
        data={data.data.customers}
        searchParameter="name"
        links
      />
    </main>
  );
}
