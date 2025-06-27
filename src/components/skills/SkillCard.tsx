import type { Skill } from '@/lib/types';

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-lg flex flex-col h-full">
      <h3 className="text-2xl font-bold text-accent mb-2">{skill.name}</h3>
      <p className="text-text-secondary flex-grow mb-4">{skill.description}</p>
      <div className="flex flex-wrap gap-2">
        {skill.keywords.map((keyword) => (
          <span
            key={keyword}
            className="bg-primary bg-opacity-20 text-white text-sm font-semibold px-2.5 py-0.5 rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;