import { NextRequest, NextResponse } from "next/server";

const recipients = {
  contact: "contact@recouniversal.com",
  support: "support@recouniversal.com",
} as const;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Please submit the form again." }, { status: 400 });
  }

  const type = clean((body as Record<string, unknown>).type) === "support" ? "support" : "contact";
  const name = clean((body as Record<string, unknown>).name);
  const email = clean((body as Record<string, unknown>).email);
  const message = clean((body as Record<string, unknown>).message);
  const company = clean((body as Record<string, unknown>).company);
  const phone = clean((body as Record<string, unknown>).phone);
  const timeline = clean((body as Record<string, unknown>).timeline);

  if (!name || !email || !message || !email.includes("@")) {
    return NextResponse.json(
      { message: "Name, a valid email, and message are required." },
      { status: 400 }
    );
  }

  const recipient = recipients[type];
  const subject = type === "support" ? "Reco Universal support request" : "Reco Universal project inquiry";
  const text = [
    `Recipient: ${recipient}`,
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    phone && `Phone: ${phone}`,
    timeline && `Timeline: ${timeline}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (process.env.RESEND_API_KEY && process.env.FROM_EMAIL) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL,
        to: recipient,
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "The message could not be sent. Please email us directly." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contact-form]", text);
  }

  return NextResponse.json({
    message:
      type === "support"
        ? "Support request submitted. We will route it to the client support team."
        : "Request submitted. We will route it to the project consultation team.",
  });
}
