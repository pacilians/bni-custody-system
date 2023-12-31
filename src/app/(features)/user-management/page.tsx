// actions
import { getUsers } from "./actions";

// components
import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import Link from "next/link";
import { columns } from "./columns";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Custody System",
  description: "User Management of custody system",
};

export default async function UserManagement() {
  const data = await getUsers();

  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar data={["User Management"]} links={["user-management"]} />
      <DataTable
        columns={columns}
        data={data.data.users}
        searchParameter="name"
        links={false}
        create={
          <Button className="gap-1.5 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600">
            <Link href="/user-management/create">
              <p>Add</p>
            </Link>
          </Button>
        }
      />
    </main>
  );
}
