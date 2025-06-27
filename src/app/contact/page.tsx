import { getContactPageContent } from '@/lib/data';
import ContactForm from '@/components/forms/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

export const revalidate = 3600;

export default async function ContactPage() {
  const content = await getContactPageContent();

  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="text-text-secondary mt-2">Have a question or want to work together? I&apos;d love to hear from you.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Form */}
        <div className="bg-surface p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-accent">Send a Message</h3>
          <ContactForm />
        </div>

        {/* Right Side: Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Contact Information</h3>
            <p className="text-text-secondary">Feel free to reach out directly through any of the following channels.</p>
          </div>
          <a href={`mailto:${content.email}`} className="flex items-center gap-4 text-lg p-4 rounded-md hover:bg-surface transition-colors">
            <Mail size={24} className="text-accent" />
            <span>{content.email}</span>
          </a>
          <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg p-4 rounded-md hover:bg-surface transition-colors">
            <Linkedin size={24} className="text-accent" />
            <span>LinkedIn</span>
          </a>
          <a href={content.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg p-4 rounded-md hover:bg-surface transition-colors">
            <Github size={24} className="text-accent" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}