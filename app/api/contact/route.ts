import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
      try {
            const formData = await request.formData();

            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const message = formData.get("message") as string;
            const budget = formData.get("budget") as string;

            if (!name || !email || !message) {
                  return NextResponse.json(
                        { error: "Name, email, and project description are required." },
                        { status: 400 }
                  );
            }

            // Process attachments
            const attachments: { filename: string; content: string }[] = [];
            const files = formData.getAll("files") as File[];

            for (const file of files) {
                  if (file && file.size > 0) {
                        const bytes = await file.arrayBuffer();
                        const base64 = Buffer.from(bytes).toString("base64");
                        attachments.push({
                              filename: file.name,
                              content: base64,
                        });
                  }
            }

            const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f0eb; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .header { background: #171717; color: white; padding: 32px 24px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; }
    .body { background: white; padding: 32px 24px; border-radius: 0 0 12px 12px; }
    .field { margin-bottom: 24px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; margin-bottom: 6px; }
    .value { font-size: 16px; color: #1a1a1a; line-height: 1.5; }
    .budget-badge { display: inline-block; background: #f97316; color: white; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; }
    .divider { height: 1px; background: #e5e5e5; margin: 24px 0; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; }
    .attachment-note { background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #92400e; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Project Inquiry</h1>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #f97316;">${escapeHtml(email)}</a></div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <div class="label">Project Description</div>
        <div class="value">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
      </div>
      ${budget ? `
      <div class="field">
        <div class="label">Budget Range (USD)</div>
        <div class="value"><span class="budget-badge">${escapeHtml(budget)}</span></div>
      </div>
      ` : ""}
      ${attachments.length > 0 ? `
      <div class="divider"></div>
      <div class="attachment-note">
        ${attachments.length} file${attachments.length > 1 ? "s" : ""} attached to this email.
      </div>
      ` : ""}
    </div>
    <div class="footer">
      Sent from Axis Designers website contact form
    </div>
  </div>
</body>
</html>`;

            const { error } = await resend.emails.send({
                  from: "Axis Designers Website <onboarding@resend.dev>",
                  // Promotion@axisdesigners.com
                  to: "akashtripathi.acad@gmail.com", 
                  replyTo: email,
                  subject: `New Project Inquiry from ${name}`,
                  html: htmlBody,
                  attachments: attachments.map((a) => ({
                        filename: a.filename,
                        content: a.content,
                  })),
            });

            if (error) {
                  console.error("Resend error:", error);
                  return NextResponse.json(
                        { error: `Failed to send email: ${error.message}` },
                        { status: 500 }
                  );
            }

            return NextResponse.json({ success: true });
      } catch (err) {
            console.error("Contact API error:", err);
            return NextResponse.json(
                  { error: "Something went wrong. Please try again later." },
                  { status: 500 }
            );
      }
}

function escapeHtml(str: string): string {
      return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}
