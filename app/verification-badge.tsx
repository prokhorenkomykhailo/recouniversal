"use client";

import { BadgeCheck, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const badgeItems = [
  "AI Readiness",
  "Responsible AI",
  "Cloud Delivery",
  "Production Support",
];

export function VerificationBadge() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [documentOpen, setDocumentOpen] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetHeight - 160 : window.innerHeight * 0.72;
      setVisible(window.scrollY > threshold);
      if (window.scrollY <= threshold) {
        setMenuOpen(false);
      }
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!documentOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDocumentOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [documentOpen]);

  return (
    <>
      <div
        className={`fixed left-4 top-1/2 z-[70] -translate-y-1/2 transition duration-700 ease-out sm:left-6 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <div className="relative flex items-center">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            onFocus={() => setMenuOpen(true)}
            className="verify-float group relative grid h-15 w-15 place-items-center rounded-full border border-blue-200/30 bg-[#061322]/90 text-blue-100 shadow-2xl shadow-blue-950/50 outline-none backdrop-blur-xl transition duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-200/60"
            aria-label="Open verification badges"
            aria-expanded={menuOpen}
          >
            <span className="verify-particle verify-particle-one" />
            <span className="verify-particle verify-particle-two" />
            <span className="verify-particle verify-particle-three" />
            <ShieldCheck className="relative z-10 h-7 w-7 transition duration-300 group-hover:rotate-6" aria-hidden="true" />
          </button>

          <div
            className={`pointer-events-none absolute left-[4.8rem] top-1/2 grid w-[min(18rem,calc(100vw-6.5rem))] -translate-y-1/2 gap-3 transition duration-500 ease-out ${
              menuOpen ? "translate-x-0 scale-100 opacity-100" : "-translate-x-4 scale-95 opacity-0"
            }`}
          >
            {badgeItems.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setDocumentOpen(true);
                  setMenuOpen(false);
                }}
                className="verify-menu-item pointer-events-auto group grid grid-cols-[4.7rem_1fr_auto] items-center gap-3 rounded-lg border border-white/12 bg-[#071322]/94 p-3 text-left shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-200/50 hover:bg-blue-500/12"
                style={{ transitionDelay: menuOpen ? `${index * 55}ms` : "0ms" }}
              >
                <img
                  src="/verification-badge.png"
                  alt=""
                  className="h-12 w-full rounded-md object-cover object-left"
                />
                <span>
                  <span className="block text-sm font-black text-white">{item}</span>
                  <span className="mt-1 block text-xs font-semibold text-blue-200">Verified delivery signal</span>
                </span>
                <BadgeCheck className="h-5 w-5 text-blue-200 transition duration-300 group-hover:scale-110" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {documentOpen && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#02060E]/86 p-4 backdrop-blur-md"
          onClick={() => setDocumentOpen(false)}
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
