"use server";

import { cookies } from "next/headers";


export async function fetchChecklist() {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://systemcustody.site:8000/database/checklist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ?? "",
    },
    cache: "no-store",
    // next: { revalidate: 60, tags: ["master-data-management"],  },
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}


