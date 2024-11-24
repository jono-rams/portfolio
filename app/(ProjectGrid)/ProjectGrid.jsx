import { firestoreDatabase } from "../../utils/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

import "./ProjectGrid.css";
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

const CACHE_KEY = "projects";
const CACHE_EXPIRATION = 6 * 60 * 60; // 6 hours in seconds

const fetcher = async () => {
  const snapshot = await getDocs(collection(firestoreDatabase, "sites"));
  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return projects;
};

export default async function ProjectGrid() {
  let projects = null;

  try {
    const cachedProjects = globalThis.cache?.get(CACHE_KEY);
    const cacheTimestamp = globalThis.cache?.get(`${CACHE_KEY}_timestamp`);

    if (
      cachedProjects &&
      cacheTimestamp &&
      Date.now() - cacheTimestamp < CACHE_EXPIRATION * 1000
    ) {
      projects = cachedProjects;
    } else {
      projects = await fetcher();

      globalThis.cache?.set(CACHE_KEY, projects);
      globalThis.cache?.set(`${CACHE_KEY}_timestamp`, Date.now());
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return <div>Failed to load projects</div>;
  }

  return (
    <div className="container max-w-screen-sm text-center proj-grid md:max-w-screen-lg lg:max-w-screen-2xl">
      <header>
        <h1 className="my-4">My Websites</h1>
      </header>

      <main>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <div className={`card ${project.type === "api" ? "api-card" : ""}`}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectImage project={project} />
                  <div className="card-body">
                    <h5 className="text-sm card-title lg:text-2xl sm:text-base">{project.title}</h5>
                  </div>
                  <div className="card-footer">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-white tech me-2 md:text-base lg:text-base"
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
          ))}
        </div>
      </main>
    </div>
  );
}
