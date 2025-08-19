import { Link } from 'react-router-dom';
import '../styles/pagecss/projects.css';

const projectData = [
  {
    id: 1,
    title: "EduCareer",
    description: "EduCareer is a web-based platform designed to support centralized learning and career upskilling.",
    link: "/proj1",
  },
  {
    id: 2,
    title: "React Jobs",
    description: "React Jobs is a job application board that allows users to post and apply for jobs.",
    link: "/proj2",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "Coded with Java, HMS is a comprehensive system for managing hospital operations that leverages the power of object-oriented programming.",
    link: "/proj3",
  },
  {
    id: 4,
    title: "Task Tracker",
    description: "Task Tracker is a simple React application that allows users to manage and track their tasks efficiently",
    link: "/proj4",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <Link to={project.link} className="project-button">
              Find Out More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
