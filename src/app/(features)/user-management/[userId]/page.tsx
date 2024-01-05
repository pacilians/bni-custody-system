// actions
import { getDetailUser } from "../actions";

// components
import Topbar from "@/components/Topbar";
import UpdateForm from "./UpdateForm";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Custody System",
  description: "User Management of custody system",
};

export default async function UserManagement({
  params,
}: Readonly<{
  params: { userId: string };
}>) {
  const data = await getDetailUser(params.userId);
  const user = data.data.user;
  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar data={["User Management"]} links={["user-management"]} />
      <UpdateForm data={user} id={params.userId}/>
    </main>
  );
}
