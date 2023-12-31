"use server";

import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";

export async function getData(customerId: string) {
  const token = cookies().get("token")?.value;

  const res = await fetch(
    `http://bnicustody.site:8000/database/${customerId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    },
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}

export async function getMasterData() {
  const res = await fetch(`http://bnicustody.site:8000/master-data`, {
    method: "GET",
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  const mandatoryType = formData.get("mandatoryType");
  const token = cookies().get("token")?.value;
  const headersList = headers();
  const fullUrl = headersList.get("referer") ?? "";

  const fullUrlObj = new URL(fullUrl);
  const pathSegments = fullUrlObj.pathname.split("/");
  const customerId = pathSegments[pathSegments.length - 1];

  const uploadData = new FormData();
  uploadData.append("file", file);

  if (mandatoryType) {
    uploadData.append("name", mandatoryType);
    uploadData.append("type", "MANDATORY");
  } else {
    uploadData.append("name", file.name);
    uploadData.append("type", "ADDITIONAL");
  }

  const url = `http://bnicustody.site:8000/database/file/${customerId}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: token ?? "",
    },
    body: uploadData,
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  revalidatePath(`/database/${customerId}`);

  const data = await res.json();
  return data;
}
