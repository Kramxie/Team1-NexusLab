import { NextResponse } from 'next/server';

type RequestBody = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

    if (!SENDGRID_API_KEY || !CONTACT_TO_EMAIL) {
      // No provider configured — log and return success for dev, or return error.
      console.warn('SendGrid not configured. Received contact form:', body);
      return NextResponse.json({ ok: true, message: 'No email provider configured; form logged on server.' });
    }

    // Build SendGrid payload
    const personalizations = [
      {
        to: [{ email: CONTACT_TO_EMAIL }],
        subject: `Website Contact: ${body.name} <${body.email}>`,
      },
    ];

    const content = [
      {
        type: 'text/plain',
        value: `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company || '-'}\n\nMessage:\n${body.message}`,
      },
    ];

    const payload = {
      personalizations,
      from: { email: 'no-reply@yourdomain.com', name: 'Website Contact' },
      content,
    };

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('SendGrid error:', res.status, text);
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
