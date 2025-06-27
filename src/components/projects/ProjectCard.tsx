import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    let liveLinkText = project.category === 'Python' ? 'Package Site' : 'Live Site';

    return (
        <div className="bg-surface rounded-lg shadow-lg flex flex-col group overflow-hidden">
            <div className="relative">
                <div className="aspect-[16/9] w-full bg-background">
                    {project.imageUrl ? (
                        <Image
                            src={project.imageUrl}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-text-secondary">
                            <p>Image not available</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-accent mb-2">{project.title}</h3>
                <p className="text-text-secondary flex-grow mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="bg-primary bg-opacity-20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors">
                            <Github size={20} />
                            <span>Source</span>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors">
                            <ArrowUpRight size={20} />
                            <span>{liveLinkText}</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;