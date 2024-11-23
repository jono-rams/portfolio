import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="container">
      <header className="my-4 text-center">
        <h1>Contact Me</h1>
      </header>
      
      <main>
        <p className="mb-4 text-center">Interested in collaborating on a project or learning more about my work? I&#39;d love to hear from you! Feel free to reach out using the form below.</p>
        <ContactForm />
      </main>
      
    </div>
  );
}
