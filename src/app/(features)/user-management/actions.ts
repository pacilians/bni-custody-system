"use server";

import { cookies } from "next/headers";

export async function getUsers() {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/user/`, {
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

export async function getDetailUser(id: any) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/user/${id}`, {
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

export async function createUser(formData: FormData) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/user`, {
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

export async function updateUser(formData: FormData, id: any) {
  const token = cookies().get("token")?.value;
  console.log({
    name: formData.get("name"),
    email: formData.get("email"),
    npp: formData.get("npp"),
    description: formData.get("description"),
    role: formData.get("role"),
  });
  const res = await fetch(`http://bnicustody.site:8000/user/${id}`, {
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


export async function deleteUser(id: any) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/user/${id}`, {
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