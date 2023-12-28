// actions


// components
import Topbar from "@/components/Topbar";
// import CreateForm from "./CreateForm";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Custody System",
  description: "User Management of custody system",
};

export default async function UserManagement() {
  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar data={["Securities Account", "Create Account"]} links={["securities-account"]} />
      {/* <CreateForm/> */}
    </main>
  );
}
