// components
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LoginForm from "./components/LoginForm";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | BNI Custody System",
  description: "Login to BNI custody system",
};

export default function Login() {
  return (
    <main className="relative flex h-svh items-center justify-center px-10">
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>
      <LoginForm />
    </main>
  );
}
