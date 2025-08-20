import { useNavigate, type To } from 'react-router-dom';
import '../styles/pagecss/projects.css';
import Navbar from '../components/Navbar';
import { Button } from '@mui/material';

const projectData = [
  {
    id: 1,
    title: "EduCareer",
    description: "EduCareer is a web-based platform designed to support centralized learning and career upskilling.",
    link: "/proj1",
    image: "/assets/Educareer.png"
  },
  {
    id: 2,
    title: "React Jobs",
    description: "React Jobs is a job application board that allows users to post and apply for jobs.",
    link: "/proj2",
    image: "/assets/Reactjobs.png"
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "Coded with Java, HMS is a Command Line Interface (CLI) application designed using the object-oriented design approach to automate the management of hospital operations.",
    link: "/proj3",
    image: "/assets/HMS.png"
  },
  {
    id: 4,
    title: "Task Tracker",
    description: "Task Tracker is a simple React application that allows users to manage and track their tasks efficiently",
    link: "/proj4",
    image: "/assets/Tasktracker.png"
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const handleFindOutMore = (link: To) => {
    navigate(link);
  }
  return (
    <div className="projects-container">
      <Navbar />
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-image"
            />
            <p className="project-description">{project.description}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFindOutMore(project.link)}
              className="project-button"
            >
              Find Out More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
