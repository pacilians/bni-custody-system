// components
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <main className="relative flex h-svh items-center justify-center">
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>
      <LoginForm />
    </main>
  );
}
