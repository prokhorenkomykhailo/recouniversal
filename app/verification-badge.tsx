"use client";

import { X } from "lucide-react";
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
        className="motion-card flow-card group block w-full overflow-hidden rounded-lg border border-blue-300/20 bg-[#050A13]/82 p-4 text-left shadow-2xl shadow-blue-950/25 outline-none transition focus-visible:border-blue-200 focus-visible:ring-2 focus-visible:ring-blue-300/40"
        aria-label="Open Reco Universal verification badge"
      >
        <div className="overflow-hidden rounded-md border border-white/10 bg-[#071322]">
          <img
            src="/verification-badge.png"
            alt="Reco Universal verification badge"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              Verification badge
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Click to view the full verification document.
            </p>
          </div>
          <span className="shrink-0 rounded-md border border-blue-200/20 bg-blue-400/10 px-3 py-2 text-xs font-bold text-blue-100">
            View
          </span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#02060E]/86 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="relative max-h-[92svh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/14 bg-[#071322] shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Reco Universal verification badge document"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-[#050A13]/88 text-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200/50 hover:text-blue-100"
              aria-label="Close verification badge"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="max-h-[92svh] overflow-auto p-3 sm:p-4">
              <img
                src="/verification-badge-opened.jpg"
                alt="Expanded Reco Universal verification badge document"
                className="mx-auto h-auto w-full rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
