import { useNavigate } from "react-router-dom";
import "../styles/pagecss/proj3.css"; 
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";


const Proj3 = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/projects");
  }
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">Hospital Management System</h1>

      <p className="project-description">
        Hospital Management System (HMS) is a Command Line Interface (CLI) application 
        designed using the object-oriented SOLID design approach to simulate hospital operations.
        Users can log in as different roles such as admin, doctor, patient to perform various tasks
      </p>

      {/* gallery of images  */}

      <p className="project-description">Check out the repository for the source code <a href="https://github.com/AlasamAkkit/SC2002-project">here</a></p>

      <Button variant="contained" color="primary" className="back-button" onClick={handleBackClick}>
        ← Back to Projects
      </Button>
    </div>
  );
};

export default Proj3;
