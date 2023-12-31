"use server";

import { cookies } from "next/headers";

export async function getMasterData() {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://bnicustody.site:8000/master-data/`, {
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

export async function handleAddMandatory(formData: FormData) {
  const res = await fetch(`http://bnicustody.site:8000/master-data/mandatory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();

  // revalidateTag('master-data-management')
  return data;
}

export async function handleDeleteMandatory(current: any) {
  const res = await fetch(
    `http://bnicustody.site:8000/master-data/mandatory/${current.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();

  // revalidateTag('master-data-management')
  return data;
}

export async function handleEdiMandatory(formData: FormData, current: any) {
  const res = await fetch(
    `http://bnicustody.site:8000/master-data/mandatory/${current.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
      }),
    },
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();

  // revalidateTag('master-data-management')
  return data;
}

export async function handleAddBusiness(formData: FormData) {
  const res = await fetch(`http://bnicustody.site:8000/master-data/business`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();

  // revalidateTag('master-data-management')
  return data;
}

export async function handleDeleteBusiness(current: any) {
  const res = await fetch(
    `http://bnicustody.site:8000/master-data/business/${current.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();

  // revalidateTag('master-data-management')
  return data;
}

export async function handleAddService(formData: FormData) {
  const res = await fetch(`http://bnicustody.site:8000/master-data/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();

  // revalidateTag('master-data-management')
  return data;
}

export async function handleDeleteService(current: any) {

  const res = await fetch(
    `http://bnicustody.site:8000/master-data/service/${current.id}`,
    {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();
  console.log(data);

  // revalidateTag('master-data-management')
  return data;
}
