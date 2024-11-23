import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message, subject: userSubject } = data;

    await resend.emails.send({
      from: 'no-reply@jono-rams.work',
      to: 'info@jono-rams.work',
      subject: `New Contact Form Submission: ${userSubject}`,
      html: `
        <p>You have a new contact form submission from ${name} (${email}):</p>
        <p>${message}</p>
      `,
    });

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

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}