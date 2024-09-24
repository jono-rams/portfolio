import { useState } from "react";
import './ProjectGrid.css';

const ProjectGrid = () => {
  
  const projs = [
    {
      image: '/imgs/memory.png',
      title: 'Memory Matching Game',
      link: 'https://magic-memory-41d0a.firebaseapp.com/',
      technologies: ['React', 'Node.js']
    },
    {
      image: '/imgs/weather.png',
      title: 'Weather App',
      link: 'https://weather-js-5ae2d.firebaseapp.com/',
      technologies: ['Vanilla JS', 'Accuweather API', 'Bootstrap']
    },
    {
      image: '/imgs/chat.png',
      title: 'Chat Room',
      link: 'https://rt-chatroom-js.firebaseapp.com/',
      technologies: ['Vanilla JS', 'Firebase', 'Bootstrap']
    },
    {
      image: '/imgs/ui-lib.png',
      title: 'UI Library',
      link: 'https://ui-lib-4087f.firebaseapp.com/',
      technologies: ['React', 'Babel', 'Webpack']
    }
  ];

  const [projects, setProjects] = useState(projs);
  console.log(projects);

  const techColors = {
    'React': 'cyan',
    'Node.js': 'green',
    'Express': 'orange',
    'MongoDB': 'darkgreen',
    'Firebase': 'yellow',
    'Vanilla JS': 'purple',
    'Webpack': 'lightblue',
    'Bootstrap': 'gray',
    'Babel': 'lightgray'
    // ... add more colors for other technologies
  };

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.title}>
            <div className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>

                </div>
              </a>
              <div className="card-footer">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge rounded-pill me-2 text-dark"
                    style={{ backgroundColor: techColors[tech] || 'gray' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;