"use server";

import { cookies } from "next/headers";

export async function getSecurities() {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/security-account/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
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

export async function getDetailSecurities(id: any) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/security-account/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
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

export async function createSecurities(formData: FormData) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/security-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      npp: formData.get("npp"),
      description: formData.get("description"),
      role: formData.get("role"),
    }),
    cache: "no-store",
    // next: { revalidate: 60, tags: ["master-data-management"],  },
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}

export async function updateSecurities(formData: FormData, id: any) {
  const token = cookies().get("token")?.value;
  console.log({
    name: formData.get("name"),
    email: formData.get("email"),
    npp: formData.get("npp"),
    description: formData.get("description"),
    role: formData.get("role"),
  });
  const res = await fetch(`http://bnicustody.site:8000/=security-account/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      npp: formData.get("npp"),
      description: formData.get("description"),
      role: formData.get("role"),
    }),
    cache: "no-store",
    // next: { revalidate: 60, tags: ["master-data-management"],  },
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}


export async function deleteSecurities(id: any) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/security-account/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
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