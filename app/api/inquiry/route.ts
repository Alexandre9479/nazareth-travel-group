import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, church, groupSize, destination, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email via Resend (if RESEND_API_KEY is set)
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.INQUIRY_NOTIFICATION_EMAIL ?? "info@nazarethtravelgroup.com";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Nazareth Travel Group <noreply@nazarethtravelgroup.com>",
        to: [notifyEmail],
        replyTo: email,
        subject: `New Inquiry: ${name} — ${destination ?? "General"}`,
        html: `
          <h2 style="font-family: Georgia, serif; color: #1a1713;">New Pilgrimage Inquiry</h2>
          <table style="font-family: Arial, sans-serif; font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px 0; color: #6b5f50; width: 140px;"><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b5f50;"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b5f50;"><strong>Phone</strong></td><td>${phone}</td></tr>
            ${church ? `<tr><td style="padding: 8px 0; color: #6b5f50;"><strong>Church</strong></td><td>${church}</td></tr>` : ""}
            ${groupSize ? `<tr><td style="padding: 8px 0; color: #6b5f50;"><strong>Group size</strong></td><td>${groupSize}</td></tr>` : ""}
            ${destination ? `<tr><td style="padding: 8px 0; color: #6b5f50;"><strong>Destination</strong></td><td>${destination}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #6b5f50; vertical-align: top;"><strong>Message</strong></td><td>${message}</td></tr>
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e6dcc9;" />
          <p style="font-size: 12px; color: #8b7a5a;">Received from nazarethtravelgroup.com contact form</p>
        `,
      });

      // Auto-reply to inquirer
      await resend.emails.send({
        from: "Nazareth Travel Group <noreply@nazarethtravelgroup.com>",
        to: [email],
        subject: "We've received your pilgrimage inquiry",
        html: `
          <h2 style="font-family: Georgia, serif; color: #1a1713;">Thank you, ${name}!</h2>
          <p style="font-family: Arial, sans-serif; font-size: 14px; color: #3d352c; line-height: 1.8;">
            We have received your inquiry and will respond within 24 hours (usually much sooner).
          </p>
          <p style="font-family: Arial, sans-serif; font-size: 14px; color: #3d352c; line-height: 1.8;">
            For urgent queries, please WhatsApp us directly at <a href="https://wa.me/254700000000">+254 700 000 000</a>.
          </p>
          <p style="font-family: Georgia, serif; font-size: 13px; color: #8b7a5a; font-style: italic; margin-top: 20px;">
            "Trust in the Lord with all your heart..." — Proverbs 3:5
          </p>
          <p style="font-family: Arial, sans-serif; font-size: 14px; color: #3d352c; margin-top: 24px;">
            Warm blessings,<br />
            <strong>Nazareth Travel Group</strong><br />
            info@nazarethtravelgroup.com
          </p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
