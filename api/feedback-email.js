import { Resend } from "resend";

export default async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  const { name, email, message } = request.body || {};
  if (!name || !email || !message || message.length > 2000) return response.status(400).json({ error: "ข้อมูล feedback ไม่ครบถ้วน" });

  // The form still saves to Supabase when email sending has not been configured.
  if (!process.env.RESEND_API_KEY || !process.env.FEEDBACK_TO_EMAIL) return response.status(202).json({ configured: false });

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: process.env.FEEDBACK_FROM_EMAIL || "myUCUE Feedback <onboarding@resend.dev>",
    to: process.env.FEEDBACK_TO_EMAIL,
    replyTo: email,
    subject: `myUCUE feedback จาก ${name}`,
    text: `ชื่อ: ${name}\nอีเมล: ${email}\n\n${message}`
  });
  return response.status(200).json({ configured: true });
}
