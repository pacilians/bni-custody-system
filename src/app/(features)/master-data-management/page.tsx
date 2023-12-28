// actions
import { getData } from "./actions";

// components
import Mandatory from "./components/mandatory";
import Business from "./components/business";
import Service from "./components/service";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Data Management | Custody System",
  description: "Master Data Management of custody system",
};

export default async function MasterDataManagement() {
  const data = await getData();
  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      <Mandatory initialData={data.data.data.mandatory} />

      {/* Service + Business Category */}
      <div className="flex basis-1/2 flex-col gap-4 mt-5">
        <Service initialData={data.data.data.service} />
        <Business initialData={data.data.data.business} />
      </div>
    </main>
  );
}
