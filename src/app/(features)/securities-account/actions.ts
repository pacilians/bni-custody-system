"use server";

import { cookies } from "next/headers";

export async function getSecurities() {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://systemcustody.site:8000/security-account/`, {
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

export async function getDetailSecurities(id: any) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://systemcustody.site:8000/security-account/${id}`, {
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

export async function addSecurities(formData: FormData) {
  const token = cookies().get("token")?.value;
  const res = await fetch(`http://systemcustody.site:8000/security-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ?? "",
    },
    body: JSON.stringify({
      id_customer: formData.get("id_customer") || "",
      kode_bk: formData.get("kode_bk") || "",
      no_rekening_investor: formData.get("no_rekening_investor") || "",
      nama: formData.get("nama") || "",
      nama_tengah: formData.get("nama_tengah") || "",
      nama_belakang: formData.get("nama_belakang") || "",
      ktp: formData.get("ktp") || "",
      npwp: formData.get("npwp") || "",
      no_paspor: formData.get("no_paspor") || "",
      role: formData.get("role") || "",
      no_pendaftaran_usaha: formData.get("no_pendaftaran_usaha") || "",
      tanggal_pendirian: formData.get("tanggal_pendirian") || "",
      tempat_pendirian: formData.get("tempat_pendirian") || "",
      tipe_investor: formData.get("tipe_investor") || "",
      jenis_kelamin: formData.get("jenis_kelamin") || "",
      jenis_pekerjaan: formData.get("jenis_pekerjaan"),
      alamat_identitas_1: formData.get("alamat_identitas_1") || "",
      alamat_identitas_2: formData.get("alamat_identitas_2") || "",
      kode_kota: formData.get("kode_kota") || "",
      kode_provinsi: formData.get("kode_provinsi") || "",
      kode_negara: formData.get("kode_negara") || "",
      no_telepon: formData.get("no_telepon") || "",
      no_hp: formData.get("no_hp") || "",
      email: formData.get("email") || "",
      domisili: formData.get("domisili") || ""
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
  const res = await fetch(`http://systemcustody.site:8000/=security-account/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ?? "",
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
  const res = await fetch(`http://systemcustody.site:8000/security-account/${id}`, {
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

export async function getCustomers() {
  const token = cookies().get("token")?.value;

  const res = await fetch(`http://systemcustody.site:8000/database`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
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