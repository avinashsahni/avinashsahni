import { Resend } from 'resend';

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_NOTIFICATION_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface EventContext<Env, P extends string, Data> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env;
  params: Record<P, string | string[]>;
  data: Data;
}

export const onRequestPost = async (context: EventContext<Env, any, any>): Promise<Response> => {
  try {
    const contentType = context.request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Expected application/json' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body: any = await context.request.json();
    const { fullName, email, companyName, projectType, description, timeline, website_hp } = body;

    // Spam honeypot
    if (website_hp) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: 'Full name is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: 'Valid business email is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!description || typeof description !== 'string' || description.trim().length < 15) {
      return new Response(
        JSON.stringify({ success: false, error: 'Description must be at least 15 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resendApiKey = context.env.RESEND_API_KEY;
    const recipientEmail = context.env.CONTACT_NOTIFICATION_EMAIL || 'avinash@avinashsahni.com';
    const senderEmail = context.env.CONTACT_FROM_EMAIL || 'Avinash Sahni <onboarding@resend.dev>';

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0A0A; color: #EDEDED; border: 1px solid #222222; border-radius: 8px;">
          <h2 style="color: #FF6B35; margin-top: 0;">New Project Inquiry</h2>
          <p style="color: #A1A1AA; font-size: 14px;">Received via avinashsahni.com contact form.</p>
          <hr style="border: 0; border-top: 1px solid #222222; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888888; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #EDEDED;">${escapeHtml(fullName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888;"><strong>Business Email:</strong></td>
              <td style="padding: 8px 0; color: #EDEDED;"><a href="mailto:${escapeHtml(email)}" style="color: #FF6B35;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888;"><strong>Company:</strong></td>
              <td style="padding: 8px 0; color: #EDEDED;">${escapeHtml(companyName || 'Not specified')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888;"><strong>Project Type:</strong></td>
              <td style="padding: 8px 0; color: #EDEDED;">${escapeHtml(projectType || 'General')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888888;"><strong>Timeline:</strong></td>
              <td style="padding: 8px 0; color: #EDEDED;">${escapeHtml(timeline || 'Flexible')}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #141414; border-radius: 6px; border: 1px solid #262626;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888888;"><strong>Project Description:</strong></p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #EDEDED;">${escapeHtml(description)}</p>
          </div>
        </div>
      `;

      const res = await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        replyTo: email,
        subject: `[Project Inquiry] ${fullName} - ${projectType || 'Web Development'}`,
        html: emailHtml,
      });

      if (res.error) {
        return new Response(
          JSON.stringify({ success: false, error: 'Email service error. Please email directly.' }),
          { status: 502, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: 'Server error processing inquiry.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
