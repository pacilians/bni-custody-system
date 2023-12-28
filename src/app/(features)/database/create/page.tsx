// actions
import { getMasterData } from "@/app/(features)/master-data-management/actions";

// components
import Topbar from "@/components/Topbar";
import CreateForm from "./CreateForm";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Custody System",
  description: "User Management of custody system",
};

export default async function CreateUser() {
  const masterData = await getMasterData()
  const service = masterData.data.data.service
  const business = masterData.data.data.business
  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar data={["Database", "Create Customer"]} links={["database"]} />
      <CreateForm service={service} business={business}/>
    </main>
  );
}
