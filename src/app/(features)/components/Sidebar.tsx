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
    <nav className="group sticky top-0 flex h-svh w-16 flex-col justify-between border-r border-gray-200 px-2 py-4 transition-[width] duration-300 hover:w-60 dark:border-gray-900">
      <div className="h-7 w-7 self-center overflow-hidden transition-[width] duration-300 group-hover:w-24">
        <BniLogo className="h-full" showWordmark />
      </div>
      <div className="flex flex-col">
        <Button
          variant="ghost"
          className="justify-start gap-2 truncate rounded-md px-3 py-6 hover:bg-gray-200 hover:dark:bg-gray-900"
        >
          <i className="i-ph-database-duotone size-6" />
          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Database
          </p>
        </Button>
        <Button
          variant="ghost"
          className="justify-start gap-2 truncate rounded-md px-3 py-6 hover:bg-gray-200 hover:dark:bg-gray-900"
        >
          <i className="i-ph-user-circle-plus-duotone size-6" />
          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            User Management
          </p>
        </Button>
        <Button
          variant="ghost"
          className="justify-start gap-2 truncate rounded-md px-3 py-6 hover:bg-gray-200 hover:dark:bg-gray-900"
        >
          <i className="i-ph-folders-duotone size-6" />
          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Master Data Management
          </p>
        </Button>
      </div>
      <div className="self-start px-1">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
