"use client"

import { trackProjectClick } from "@/utils/gtag";
import { siteClicked } from "./actions";
import ProjectImage from "./ProjectImage";

const techColors = {
  React: "#00bbbb",
  "Node.js": "green",
  Express: "orange",
  MongoDB: "darkgreen",
  Firebase: "#dddd00",
  "Vanilla JS": "purple",
  Webpack: "lightblue",
  Bootstrap: "gray",
  Babel: "lightgray",
  Hono: "#ff6600",
};

export default function ProjectCard({project}) {
  const handleProjectClick = () => {
    trackProjectClick(project.title, project.id);
    siteClicked(project);
  };
  
  return (
    <div className="col" key={project.id}>
      <div className={`card ${project.type === "api" ? "api-card" : ""}`}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleProjectClick}
        >
          <ProjectImage project={project} />
          <div className="card-body">
            <h5 className="text-sm card-title lg:text-2xl sm:text-base">
              {project.title}
            </h5>
          </div>
          <div className="card-footer">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-white sm:text-xs tech me-2 md:text-base lg:text-base"
                style={{
                  backgroundColor: techColors[tech] || "gray",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}
