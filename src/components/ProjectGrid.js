import { useEffect, useState } from 'react';
import { analytics, firebaseStorage, firestoreDatabase } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

import './ProjectGrid.css';
import { logEvent } from 'firebase/analytics';

const techColors = {
  'React': '#00bbbb',
  'Node.js': 'green',
  'Express': 'orange',
  'MongoDB': 'darkgreen',
  'Firebase': '#dddd00',
  'Vanilla JS': 'purple',
  'Webpack': 'lightblue',
  'Bootstrap': 'gray',
  'Babel': 'lightgray'
  // ... add more colors for other technologies
};

const ProjectGrid = () => {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    onSnapshot(collection(firestoreDatabase, 'sites'), (snapshot) => {
      const projs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      
      Promise.all(projs.map(p => {
        const iRef = ref(firebaseStorage, p.image);
        return getDownloadURL(iRef).then((url) => ({
          ...p,
          image:url
        }));
      })).then(updatedProjs => {
        setProjects(updatedProjs);
      });
    });
  }, [])

  const handleThumbnailClick = (projectName) => {
    logEvent(analytics, 'thumbnail_click', {
      project_name: projectName
    })
  }

  return (
    <div className="proj-grid container text-center">
      <header>
        <h1 className='pb-3'>My Websites</h1>
      </header>

      {!projects && <div className='text-center'>Loading website details...</div>}

      <div className="row row-cols-2">
        {projects && projects.map((project) => (
          <div className="col mb-4" key={project.title}>
            <div className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={() => handleThumbnailClick(project.title)}>
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                </div>
                <div className="card-footer">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge rounded-pill me-2 fs-6 text-white"
                      style={{ backgroundColor: techColors[tech] || 'gray' }}
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
    </div>
  );
};

export default ProjectGrid;