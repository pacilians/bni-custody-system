// components
import { buttonVariants } from "@/components/ui/button";

// libs
import Link from "next/link";
import { Fragment } from "react";

export default function Topbar({
  data,
  links,
}: {
  data: string[];
  links: string[];
}) {
  return (
    <nav className="fixed top-0 flex items-center gap-2 py-5">
      {data.map((item, index) => (
        <Fragment key={item}>
          <Link
            href={"/" + links.slice(0, index + 1).join("/")}
            className={buttonVariants({ variant: "link" })}
          >
            {item}
          </Link>
          <i className="i-ph-caret-right-bold size-5 text-gray-300 last:hidden dark:text-gray-700" />
        </Fragment>
      ))}
    </nav>
  );
}
