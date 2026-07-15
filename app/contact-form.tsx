"use client";

import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit the message.");
      }

      setStatus("success");
      setMessage(result.message || "Your message was submitted.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit the message.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="motion-card rounded-lg border border-white/10 bg-[#071322]/92 p-5 shadow-2xl shadow-blue-950/30 sm:p-7"
    >
      <div className="flex items-start gap-4 border-b border-white/10 pb-6">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-blue-500/15 text-blue-100">
          <Mail className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Start a conversation</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            Send a brief request. We will follow up with the right next step.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Request type
          <select
            name="type"
            required
            className="h-12 rounded-md border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-blue-300"
            defaultValue="contact"
          >
            <option value="contact">Project inquiry</option>
            <option value="support">Client support</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Work email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-12 rounded-md border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.12)]"
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Full name
          <input
            name="name"
            required
            autoComplete="name"
            className="h-12 rounded-md border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.12)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Company
          <input
            name="company"
            autoComplete="organization"
            className="h-12 rounded-md border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.12)]"
            placeholder="Company name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-12 rounded-md border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.12)]"
            placeholder="+1 555 000 0000"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Timeline
          <select
            name="timeline"
            className="h-12 rounded-md border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.12)]"
            defaultValue="Not sure yet"
          >
            <option>ASAP</option>
            <option>2-4 weeks</option>
            <option>1-3 months</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-md border border-white/10 bg-slate-950 p-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300 focus:shadow-[0_0_0_3px_rgba(147,197,253,0.12)]"
          placeholder="Briefly describe the request."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting
            </>
          ) : (
            <>
              Submit request
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
        {message && (
          <p
            className={`flex items-center gap-2 text-sm ${
              status === "success" ? "text-emerald-200" : "text-rose-200"
            }`}
          >
            {status === "success" && <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
