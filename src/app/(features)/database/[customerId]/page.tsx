// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database | BNI Custody System",
  description: "Database of BNI custody system",
};

export default function Customer({
  params,
}: {
  params: { customerId: string };
}) {
  return <div>Customer: {params.customerId}</div>;
}
