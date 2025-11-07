import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

async function verifyTurnstile(token: string) {
  const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  // We send a POST request with x-www-form-urlencoded data
  const response = await fetch(VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(token)}`,
  });
  
  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, subject: userSubject, token } = data;

    if (!name || !email || !message || !userSubject) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    if (!token) {
      return new Response(JSON.stringify({ message: 'Missing CAPTCHA token' }), { status: 400 });
    }

    const isHuman = await verifyTurnstile(token);
    if (!isHuman) {
      return new Response(JSON.stringify({ message: 'Invalid CAPTCHA. Please refresh and try again.' }), { status: 403 });
    }

    // Send "thank you" email to the user
    await resend.emails.send({
      from: 'no-reply@jono-rams.work',
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
        <p>-Jonathan Rampersad</p>
      `,
    });

    fetch(N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(err => {
      // Log the error, but don't block the user response
      console.error('Error sending to n8n webhook:', err);
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}