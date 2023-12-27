// actions
import { getData } from "./actions";

// components
import { DataTable } from "@/components/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "./components/Columns";

// libs
import { Metadata } from "next";

// types

export const metadata: Metadata = {
  title: "Database | Custody System",
  description: "Database of custody system",
};

export default async function Customer({
  params,
}: Readonly<{
  params: { customerId: string };
}>) {
  const data = await getData(params.customerId);

  const mandatoryFiles = data.data.customer.mandatory_file.filter(
    (file: { exist: number }) => file.exist === 1,
  );
  const additionalFiles = data.data.customer.additional_file.filter(
    (file: { exist: number }) => file.exist === 1,
  );

  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Tabs defaultValue="mandatory" className="w-full">
        <TabsList>
          <TabsTrigger value="mandatory">Mandatory files</TabsTrigger>
          <TabsTrigger value="additional">Additional files</TabsTrigger>
        </TabsList>
        <TabsContent value="mandatory">
          <DataTable
            columns={columns}
            data={mandatoryFiles}
            searchParameter="name"
            links
          />
        </TabsContent>
        <TabsContent value="additional">
          <DataTable
            columns={columns}
            data={additionalFiles}
            searchParameter="name"
            links
          />
        </TabsContent>
      </Tabs>
    </main>
  );
}
