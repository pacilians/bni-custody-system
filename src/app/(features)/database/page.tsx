// actions
import { getData } from "./actions";

// components
import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import Link from "next/link";
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
      <Topbar data={["Database"]} links={["database"]} />
      <DataTable
        columns={columns}
        data={data.data.customers}
        searchParameter="name"
        links
        create={
          <Button className="gap-1.5 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600">
            <Link href="/database/create">
              <p>Add</p>
            </Link>
          </Button>
        }
      />
    </main>
  );
}
