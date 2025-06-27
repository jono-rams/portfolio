import { getSkills } from '@/lib/data';
import SkillCard from '@/components/skills/SkillCard';

export default async function SkillsSection() {
  const skills = await getSkills();

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Technical Skills</h2>
        <p className="text-text-secondary mt-2">A look at the technologies I work with.</p>
      </div>
      
      {skills.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <p className="text-center text-text-secondary">Skills are being updated. Please check back soon.</p>
      )}
    </section>
  );
}