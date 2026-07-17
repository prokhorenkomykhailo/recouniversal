"use client";

import { useEffect, useState } from "react";

export function VerificationBadge() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full overflow-hidden rounded-md outline-none transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-300/40"
        aria-label="Open Reco Universal verification badge"
      >
        <img
          src="/verification-badge.png"
          alt="Reco Universal verification badge"
          className="h-auto w-full rounded-md transition duration-500 group-hover:scale-[1.02]"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#02060E]/86 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <img
            src="/verification-badge-opened.jpg"
            alt="Expanded Reco Universal verification badge document"
            className="max-h-[92svh] w-auto max-w-[96vw] object-contain"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          />
        </div>
      )}
    </>
  );
}
