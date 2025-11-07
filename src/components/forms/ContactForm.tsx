"use client";

import { useState, FormEvent } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import CustomButton from '../ui/CustomButton';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!token) {
      setStatus('error');
      setErrorMsg('Security verification is incomplete. Please wait a moment.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const formData = {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      subject: (event.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
      message: (event.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
      token: token,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message || 'Something went wrong');
      }

      setStatus('success');
      setToken(null);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any 
    catch (error: any) {
      setStatus('error');
      setErrorMsg(error.message);
      setToken(null);
    }
  }

  if (status === 'success') {
    return <p className="text-center text-lg text-green-400">Thank you! Your message has been sent successfully.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Your Name" required className="bg-surface p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent" />
        <input type="email" name="email" placeholder="Your Email" required className="bg-surface p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <input type="text" name="subject" placeholder="Subject" required className="bg-surface p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent" />
      <textarea name="message" placeholder="Your Message" rows={6} required className="bg-surface p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent" />

      <div className="flex justify-center md:justify-start">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => {
            setToken(token);
            // Clear token-related errors
            if (errorMsg === 'Security verification is incomplete. Please wait a moment.') {
              setErrorMsg('');
              setStatus('idle');
            }
          }}
          onExpire={() => setToken(null)}
          onError={() => {
            setStatus('error');
            setErrorMsg('Security challenge failed. Please reload the page.');
            setToken(null);
          }}
          options={{
            theme: 'dark',
          }}
        />
      </div>

      {status === 'error' && <p className="text-red-500">{errorMsg}</p>}

      <CustomButton type="submit" variant="primary" className="w-full" disabled={status === 'submitting' || !token}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </CustomButton>
    </form>
  );
}