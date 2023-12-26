"use client";

// components
import BniLogo from "@/components/BniLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";

// libs
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 flex h-svh w-16 flex-col justify-between border-r border-gray-200 px-2 py-4 transition-[width] duration-300 hover:w-60 dark:border-gray-900">
      <BniLogo className="h-7" pictogram="fill-[#F15A23]" />
      <div className="flex flex-col">
        <Button
          variant="ghost"
          className="justify-start gap-3 truncate rounded-md py-6 hover:bg-gray-200 hover:dark:bg-gray-900"
        >
          <i className="i-ph-database-duotone size-6" />
          Database
        </Button>
        <Button
          variant="ghost"
          className="justify-start gap-3 truncate rounded-md py-6 hover:bg-gray-200 hover:dark:bg-gray-900"
        >
          <i className="i-ph-user-circle-plus-duotone size-6" />
          User Management
        </Button>
      </div>
      <div className="self-center">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
