// actions
import { getData, getMasterData } from "./actions";

// components
import Topbar from "@/components/Topbar";
import { DataTable } from "./components/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "./components/Columns";
import UploadFileDialog, {
  MasterDataItem,
} from "./components/UploadFileDialog";

// libs
import { Metadata } from "next";

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
  const masterData = await getMasterData();

  const mandatoryFiles = data.data.customer.mandatory_file.filter(
    (file: { exist: number }) => file.exist === 1,
  );
  const additionalFiles = data.data.customer.additional_file.filter(
    (file: { exist: number }) => file.exist === 1,
  );

  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar
        data={["Database", data.data.customer.name]}
        links={["database", params.customerId]}
      />
      <Tabs defaultValue="mandatory" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="mandatory" className="grow">Mandatory files</TabsTrigger>
          <TabsTrigger value="additional" className="grow">Additional files</TabsTrigger>
        </TabsList>
        <TabsContent value="mandatory">
          <DataTable
            columns={columns}
            data={mandatoryFiles}
            searchParameter="name"
            links
            create={
              <UploadFileDialog
                masterData={masterData.data.data.mandatory as MasterDataItem[]}
              />
            }
          />
        </TabsContent>
        <TabsContent value="additional">
          <DataTable
            columns={columns}
            data={additionalFiles}
            searchParameter="name"
            links
            create={
              <UploadFileDialog
                masterData={masterData.data.data.mandatory as MasterDataItem[]}
              />
            }
          />
        </TabsContent>
      </Tabs>
    </main>
  );
}
