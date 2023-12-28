// actions
// import { getData } from "./actions";

// components
// import Mandatory from "./components/mandatory";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Custody System",
  description: "User Management of custody system",
};

export default async function MasterDataManagement() {
//   const data = await getData();
  return (
    <main className="relative flex min-h-svh grow flex-col bg-white px-10 py-20 dark:bg-gray-900/40">
      {/* <Mandatory initialData={data.data.data.mandatory} /> */}

      {/* Service + Business Category */}
      <div className="flex basis-1/2 flex-col gap-4 mt-5">
        {/* <Service initialData={data.service} /> */}
        Shad CN

        asdashkd
        {/* <Category initialData={data.business} /> */}
      </div>
    </main>
  );
}
