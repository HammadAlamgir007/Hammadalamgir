// Contact form endpoint — runs as a Vercel serverless function and is reused
// by server.js for local development. Configure via environment variables:
//   EMAIL_USER          Gmail address used to send (required)
//   EMAIL_APP_PASSWORD  Gmail app password (required)
//   EMAIL_TO            Inbox that receives messages (defaults to EMAIL_USER)
const nodemailer = require("nodemailer");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, subject: 200, message: 5000 };

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const singleLine = (value) => String(value || "").replace(/[\r\n]+/g, " ").trim();

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  const body = req.body || {};
  const name = singleLine(body.name);
  const email = singleLine(body.email);
  const subject = singleLine(body.subject);
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Name, email and message are required." });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ success: false, error: "Please provide a valid email address." });
  }
  if (Object.entries({ name, email, subject, message }).some(([key, value]) => value.length > LIMITS[key])) {
    return res.status(400).json({ success: false, error: "Message is too long." });
  }

  const { EMAIL_USER, EMAIL_APP_PASSWORD, EMAIL_TO } = process.env;
  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    console.warn("Contact form: EMAIL_USER / EMAIL_APP_PASSWORD are not configured.");
    return res.status(503).json({ success: false, error: "Email delivery is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_APP_PASSWORD },
    });

    const title = subject || `Portfolio contact from ${name}`;
    await transporter.sendMail({
      from: `"Portfolio contact" <${EMAIL_USER}>`,
      to: EMAIL_TO || EMAIL_USER,
      replyTo: email,
      subject: title,
      text: `From: ${name} <${email}>\n${subject ? `Subject: ${subject}\n` : ""}\n${message}`,
      html: `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#16161a">
          <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6242f0">Portfolio contact</p>
          <h1 style="margin:0 0 20px;font-size:20px">${escapeHtml(title)}</h1>
          <p style="margin:0 0 4px"><strong>${escapeHtml(name)}</strong></p>
          <p style="margin:0 0 20px"><a href="mailto:${escapeHtml(email)}" style="color:#6242f0">${escapeHtml(email)}</a></p>
          <div style="padding:16px;border-radius:12px;background:#f2f2f6;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
        </div>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form: failed to send email", error);
    return res.status(500).json({ success: false, error: "Failed to send message." });
  }
};
