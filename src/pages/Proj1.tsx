import { useNavigate } from "react-router-dom";
import "../styles/pagecss/proj1.css"; 
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";

const Proj1 = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/projects");
  }
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">EduCareer</h1>

      <p className="project-description">
        EduCareer is a web-based platform designed to support centralized learning and career upskilling. 
        It serves learners, education providers, and administrators by 
        offering accessible tools for course participation, content management, and system oversight.
        The main objectives of EduCareer are:
        <ul>
          <li><strong>Support Learner Growth: </strong>Enable learners to explore, enroll in, and track educational programs to support personal development and career advancement.</li>
          <li><strong>Empower Content Providers: </strong>Allow training institutions and educators to create and manage courses without technical complexity.</li>
          <li><strong>Simplify Administration: </strong>Provide admins with tools to manage user accounts, monitor progress, and maintain the overall platform.</li>
        </ul>
        This project aims to demonstrate how a centralized learning hub can enhance educational access, streamline course delivery, and encourage upskilling in an efficient, user-friendly environment.
      </p>

      {/* image gallery */}

      <p className="project-description">Check out the repositories for the source codes:</p>
      <p><a href="https://github.com/KCCHONG1997/ecom_frontend">Frontend</a></p>
      <p><a href="https://github.com/KCCHONG1997/ecom_backend">Backend</a></p>
      <p><a href="https://github.com/KCCHONG1997/ecom_db">Database</a></p>

      <Button variant="contained" color="primary" className="back-button" onClick={handleBackClick}>
        ← Back to Projects
      </Button>
    </div>
  );
};

export default Proj1;
