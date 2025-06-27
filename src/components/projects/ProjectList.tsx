"use client";

import { useState } from 'react';
import type { Project } from '@/lib/types';
import ProjectCard from './ProjectCard';

type ProjectListProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'Python', 'C++', 'API'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
              activeFilter === category
                ? 'bg-accent text-background'
                : 'bg-surface hover:bg-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} isPriority={index < 3} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;