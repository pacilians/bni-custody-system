// actions
import { getData, getMasterData } from "./actions";

// components
import Topbar from "@/components/Topbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerDetailCarousel from "./components/CustomerDetailCarousel";
import UploadFileDialog, {
  MasterDataItem,
} from "./components/UploadFileDialog";
import { DataTable } from "./components/data-table";

// libs
import dayjs from "dayjs";
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
  const customer = data.data.customer;
  const masterData = await getMasterData();

  const mandatoryFiles = customer.mandatory_file.filter(
    (file: { exist: number }) => file.exist === 1,
  );
  const additionalFiles = customer.additional_file.filter(
    (file: { exist: number }) => file.exist === 1,
  );

  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Topbar
        data={["Database", customer.name]}
        links={["database", params.customerId]}
      />
      <div className="mb-5 flex gap-2 rounded-xl bg-gray-100 p-2 dark:bg-gray-900">
        <div className="relative flex max-w-sm flex-col gap-1 rounded bg-white px-8 py-5 dark:bg-gray-800">
          <h1 className="mb-3 text-2xl font-semibold">{customer.name}</h1>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">Address:</p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {customer.address}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">Email:</p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {customer.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">Telephone:</p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {customer.telephone}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">
              Expiry date:
            </p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {dayjs(customer.expiry_date as string).format("DD/MM/YYYY")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">
              Founding date:
            </p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {dayjs(customer.birth_date as string).format("DD/MM/YYYY")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">
              Business category:
            </p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {customer.business_category}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-40 text-gray-400 dark:text-gray-600">Service:</p>
            <p className="truncate text-gray-600 dark:text-gray-400">
              {customer.service}
            </p>
          </div>
        </div>
        <CustomerDetailCarousel customer={customer} />
      </div>
      <Tabs defaultValue="mandatory" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="mandatory" className="grow">
            Mandatory files
          </TabsTrigger>
          <TabsTrigger value="additional" className="grow">
            Additional files
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mandatory">
          <DataTable
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
