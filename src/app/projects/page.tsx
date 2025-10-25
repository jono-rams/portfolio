import { getProjects } from '@/lib/data';
import ProjectList from '@/components/projects/ProjectList';

export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-text-secondary mt-2">Here are some of my favorite projects.</p>
      </div>
      <ProjectList projects={projects} />
    </section>
  );
}