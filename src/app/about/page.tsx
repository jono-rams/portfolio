// src/app/about/page.tsx
import Image from 'next/image';
import { getAboutPageContent } from '@/lib/data';

export const revalidate = 3600; // Revalidate every hour

export default async function AboutPage() {
  const content = await getAboutPageContent();

  const skillOrder = [
    'Languages & Backend',
    'Databases',
    'Cloud & DevOps',
    'Frontend',
    'APIs & Methodologies',
    'ERP & Business Systems'
  ];

  return (
    <section id="about" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-text-secondary mt-2">A little more about my journey and expertise.</p>
      </div>

      {/* Bio and Profile Picture Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-20">
        <div className="md:col-span-1">
          {content.profileImageUrl && (
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mx-auto max-w-xs md:max-w-full">
              <Image
                src={content.profileImageUrl}
                alt="Photograph of Jonathan Rampersad"
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          )}
        </div>
        <div className="md:col-span-2 text-lg text-text-secondary space-y-4">
          {content.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Categorical Skills Section */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-10">Technical Proficiencies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillOrder.map((category) => {
            const skillsList = content.skills[category];
            if (!skillsList) return null;

            return (
              <div key={category} className="bg-surface p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-accent mb-4 border-b-2 border-accent pb-2">{category}</h4>
                <ul className="space-y-2">
                  {skillsList.map((skill) => (
                    <li key={skill} className="text-text-secondary">{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}