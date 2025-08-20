import { Link } from "react-router-dom";
import "../styles/pagecss/proj4.css"; 
import Navbar from "../components/Navbar";

const Proj4 = () => {
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">Task Tracker (React To-Do List)</h1>
      
      <img
        src="/assets/todolist.png" 
        alt="React To-Do List image"
        className="project-image"
      />

      <p className="project-description">
        Task Tracker is a simple React application that allows users to manage 
        and track their daily tasks efficiently. Users can add, remove, and 
        mark tasks as complete, providing a clean and intuitive experience.
      </p>

      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default Proj4;
