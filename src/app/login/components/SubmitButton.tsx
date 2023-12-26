"use client";

// components
import { Button } from "@/components/ui/button";

// libs
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="ghost"
      aria-disabled={pending}
      disabled={pending}
      className="group mt-6 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
    >
      <p className="translate-x-[13px] group-hover:translate-x-0">Log in</p>
      <i className="i-ph-arrow-circle-right size-5 -translate-x-[13px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
    </Button>
  );
}
