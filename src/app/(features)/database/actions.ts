"use server";

import { cookies } from "next/headers";

export async function getData() {
  const token = cookies().get("token")?.value;

  const res = await fetch("http://bnicustody.site:8000/database", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}
