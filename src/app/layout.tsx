// component
import { Toaster } from "@/components/ui/sonner";

// libs
import type { Metadata } from "next";

// providers
import { Providers } from "./providers";

// styles
import { Figtree } from "next/font/google";
import "./globals.css";

// utils
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custody System",
  description: "Custody system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={cn(figtree.className, "bg-gray-100 dark:bg-gray-950")}>
          {children}
          <Toaster richColors />
        </body>
      </Providers>
    </html>
  );
}
