"use client";

import { CheckCircle2, Settings2, X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "reco-cookie-consent-v1";

type CookieSettings = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultSettings: CookieSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  function saveConsent(nextSettings: CookieSettings) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...nextSettings,
        savedAt: new Date().toISOString(),
      }),
    );
    setSettings(nextSettings);
    setVisible(false);
    setCustomizing(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-lg border border-white/12 bg-[#071322]/96 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-blue-500/15 text-blue-100">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Cookie preferences</h2>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  We use essential cookies for site preferences. Optional cookies help us understand
                  site performance and improve future client experiences.
                </p>
              </div>
            </div>

            {customizing && (
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-bold text-white">Necessary</div>
                  <p className="mt-2 text-xs leading-5 text-slate-400">Required for basic site functions.</p>
                  <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Always on</div>
                </div>
                {[
                  ["analytics", "Analytics", "Helps measure content performance."],
                  ["marketing", "Marketing", "Supports future campaign measurement."],
                ].map(([key, label, body]) => (
                  <label
                    key={key}
                    className="cursor-pointer rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-200/40"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-white">{label}</span>
                      <input
                        type="checkbox"
                        checked={settings[key as "analytics" | "marketing"]}
                        onChange={(event) =>
                          setSettings((current) => ({
                            ...current,
                            [key]: event.target.checked,
                          }))
                        }
                        className="h-4 w-4 accent-blue-400"
                      />
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{body}</p>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            {customizing ? (
              <button
                type="button"
                onClick={() => saveConsent(settings)}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Save choices
              </button>
            ) : (
              <button
                type="button"
                onClick={() => saveConsent({ necessary: true, analytics: true, marketing: true })}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Accept
              </button>
            )}
            <button
              type="button"
              onClick={() => saveConsent(defaultSettings)}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-blue-200/50"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => setCustomizing((current) => !current)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/12 bg-transparent px-4 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-200/50 hover:text-white"
            >
              {customizing ? <X className="h-4 w-4" aria-hidden="true" /> : <Settings2 className="h-4 w-4" aria-hidden="true" />}
              {customizing ? "Close" : "Customize"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
