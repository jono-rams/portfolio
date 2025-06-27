import { getHomePageContent } from '@/lib/data';
import Button from '@/components/ui/Button';

// This line enables Incremental Static Regeneration (ISR)
// It tells Next.js to re-fetch the data at most once every hour (3600 seconds)
export const revalidate = 3600;

export default async function HomePage() {
  // Fetch the content directly in the server component
  const content = await getHomePageContent();

  return (
    <section className="flex items-center justify-center h-full text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Jonathan Rampersad
        </h1>
        <p 
          className="text-2xl md:text-3xl font-light mb-8 text-accent"
          style={{ textShadow: '0 0 10px var(--color-accent)' }}
        >
          {content.title}
        </p>
        <p className="text-lg md:text-xl text-text-secondary mb-12">
          {content.introParagraph}
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Button href="/projects" variant="primary">
            View My Work
          </Button>
          <Button href="/resume.pdf" variant="secondary" >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}