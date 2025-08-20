import { Link } from "react-router-dom";
import "../styles/pagecss/proj3.css"; 
import Navbar from "../components/Navbar";

const Proj3 = () => {
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">Hospital Management System</h1>
      
      <img
        src="/assets/hms.png" 
        alt="HMS image"
        className="project-image"
      />

      <p className="project-description">
        Hospital Management System (HMS) is a Command Line Interface (CLI) application 
        designed using the object-oriented SOLID design approach to simulate hospital operations.
        Users can log in as different roles such as admin, doctor, patient to perform various tasks
      </p>

      {/* gallery of images  */}

      <p className="project-description">Check out the repository for the source code <a href="https://github.com/AlasamAkkit/SC2002-project">here</a></p>

      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default Proj3;
