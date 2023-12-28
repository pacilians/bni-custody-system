// actions
import { getSecurities } from "./actions";

// components
import Topbar from "@/components/Topbar";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Custody System",
  description: "User Management of custody system",
};

export default async function UserManagement() {
  const data = await getSecurities();

  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar data={["Securities Account"]} links={["securities-account"]} />
      <DataTable
        columns={columns}
        data={data.data.securitiesAccounts}
        searchParameter="name"
        links={false}
      />
    </main>
  );
}
