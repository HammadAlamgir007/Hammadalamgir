// Local development server for the contact form.
// `npm run server` (port 3034) — the CRA dev server proxies /api to it.
// In production on Vercel, api/contact.js runs as a serverless function instead.
require("dotenv").config();
const express = require("express");
const contactHandler = require("./api/contact");

const app = express();
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.post("/api/contact", contactHandler);

const PORT = 3034;
app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.warn("EMAIL_USER / EMAIL_APP_PASSWORD are not set — messages will not be delivered.");
  }
});
