"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch(`http://systemcustody.site:8000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: rawFormData.email,
      password: rawFormData.password,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = await res.json();

  cookies().set("token", data.data.token, { maxAge: 7200 });
  cookies().set("name", data.data.user.name, { maxAge: 7200 });
  cookies().set("role", data.data.user.role, { maxAge: 7200 });

  return data;
}
