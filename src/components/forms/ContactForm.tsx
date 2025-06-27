"use client";

import { useState, FormEvent } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const formData = {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
      email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      subject: (event.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
      message: (event.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
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
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any 
    catch (error: any) {
      setStatus('error');
      setErrorMsg(error.message);
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

      {status === 'error' && <p className="text-red-500">{errorMsg}</p>}

      <Button type="submit" variant="primary" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}