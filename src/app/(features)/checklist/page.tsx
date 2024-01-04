
// actions
import { fetchChecklist } from "./actions";

// components
import Topbar from "@/components/Topbar";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import Link from "next/link";
import TableChecklist from "./table";

// libs
import { ArrowUpDown } from "lucide-react";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist | Custody System",
  description: "Checklist of custody system",
};

export default async function Checklist() {
  const data = await fetchChecklist();
  const checklist = data.data.checklist;
  const col = data.data.column;


  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar data={["Check File"]} links={["checklist"]} />
      <TableChecklist column={col} data={checklist}/>
    </main>
  );
}
