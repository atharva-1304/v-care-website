import { Resend } from "resend";

const recipient = "vcarecrm.support@gmail.com";

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email delivery has not been configured yet." },
      { status: 503 },
    );
  }

  const payload = await request.json();
  const name = clean(payload.name, 100);
  const contact = clean(payload.contact, 40);
  const email = clean(payload.email, 254);
  const message = clean(payload.message, 3000);
  const honeypot = clean(payload.website, 200);

  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !contact || !email || !message || !email.includes("@")) {
    return Response.json(
      { error: "Please complete all fields with a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "V-Care <onboarding@resend.dev>",
    to: [recipient],
    replyTo: email,
    subject: `V-Care demo request from ${name}`,
    html: `
      <h1>New V-Care demo request</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Contact number:</strong> ${escapeHtml(contact)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return Response.json({ error: "We could not send your request. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
