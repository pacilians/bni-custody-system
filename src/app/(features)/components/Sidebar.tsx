"use client";

// components
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { buttonVariants } from "@/components/ui/button";

// libs
import Link from "next/link";
import { usePathname } from "next/navigation";

// utils
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="group sticky top-0 flex h-svh w-16 flex-col justify-between border-r border-gray-200 px-2 py-4 transition-[width] duration-300 hover:w-60 dark:border-gray-900">
      <div className="h-7 w-7 self-center overflow-hidden transition-[width] duration-300 group-hover:w-24">
        {/* <BniLogo className="h-full" showWordmark /> */}
        <div />
      </div>
      <div className="flex flex-col">
        <Link
          href="/database"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start gap-2 truncate rounded-md px-3 py-6 hover:bg-gray-200 hover:dark:bg-gray-900",
            pathname.startsWith("/database") &&
              "bg-orange-200 text-orange-800 hover:bg-orange-200 hover:text-orange-800 dark:bg-orange-800 dark:text-orange-100 hover:dark:bg-orange-800 hover:dark:text-orange-100",
          )}
        >
          <i className="i-ph-database-duotone size-6" />
          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Database
          </p>
        </Link>
        <Link
          href="/user-management"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start gap-2 truncate rounded-md px-3 py-6 hover:bg-gray-200 hover:dark:bg-gray-900",
            pathname.startsWith("/user-management") &&
              "bg-orange-200 text-orange-800 hover:bg-orange-200 hover:text-orange-800 dark:bg-orange-800 dark:text-orange-100 hover:dark:bg-orange-800 hover:dark:text-orange-100",
          )}
        >
          <i className="i-ph-user-circle-plus-duotone size-6" />
          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            User Management
          </p>
        </Link>
        <Link
          href="/master-data-management"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start gap-2 truncate rounded-md px-3 py-6 hover:bg-gray-200 hover:dark:bg-gray-900",
            pathname.startsWith("/master-data-management") &&
              "bg-orange-200 text-orange-800 hover:bg-orange-200 hover:text-orange-800 dark:bg-orange-800 dark:text-orange-100 hover:dark:bg-orange-800 hover:dark:text-orange-100",
          )}
        >
          <i className="i-ph-folders-duotone size-6" />
          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Master Data Management
          </p>
        </Link>
      </div>
      <div className="self-start px-1">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
