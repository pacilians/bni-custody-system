"use client";

// components
import { Button } from "@/components/ui/button";

// libs
import { useFormStatus } from "react-dom";

export default function UploadFileButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="group mt-6 gap-1.5 *:transition"
    >
      <p className="translate-x-[13px] group-hover:translate-x-0">Upload file</p>
      <i className="i-ph-upload-simple-bold size-5 -translate-x-[13px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
    </Button>
  );
}
