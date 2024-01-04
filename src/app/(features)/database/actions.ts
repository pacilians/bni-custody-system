"use server";

import { cookies } from "next/headers";

export async function getData() {
  const token = cookies().get("token")?.value;

  const res = await fetch(`http://systemcustody.site:8000/database`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ?? "",
    },
    cache: "no-store",
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = res.json();
  return data;
}

export async function addCustomer(
  formData: FormData,
  bod: any,
  bankAccount: any,
) {
  const token = cookies().get("token")?.value;
  const payload = {
    name: formData.get("name"),
    address: formData.get("address"),
    telephone: formData.get("telephone"),
    email: formData.get("email"),
    expiry_date: formData.get("expiry_date"),
    business_category: formData.get("business_category"),
    service: formData.get("service"),
    birth_date: formData.get("birth_date"),
    key_person_name: formData.get("key_person_name"),
    key_person_dob: formData.get("key_person_dob"),
    key_person_hp: formData.get("key_person_hp"),
    bank_account: bankAccount,
    board_of_director: bod,
  };
  const res = await fetch(`http://systemcustody.site:8000/database`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ?? "",
    },
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  const data = await res.json();
  // revalidateTag('master-data-management')
  return data;
}


export async function deleteCustomer(id: any) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://systemcustody.site:8000/database/${id}`, {
    method: "DELETE",
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
