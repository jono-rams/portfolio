"use client"

import { useFormStatus } from "react-dom";

export default function SubmitButton({ submitText, pendingText, className }) {
  const { pending } = useFormStatus();

  return (
    <button className={className} disabled={pending}>
      {pending && <span>{pendingText}</span>}
      {!pending && <span>{submitText}</span>}
    </button>
  )
}