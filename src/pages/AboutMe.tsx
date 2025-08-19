import "../styles/pagecss/about.css"
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AboutMe = () => {
  return (
    <div className="about-container">
      <Navbar />
      <section className="hero">
        <h1 className="hero-title">Hi, I'm Yu Siang</h1>
        <p className="hero-subtitle1">
          I'm a computer science student who is a passionate developer building modern and interactive web experiences.
        </p>
        <p className="hero-subtitle2">
          I enjoy learning new technologies and building projects that solve real-world problems.
        </p>
        <p className="hero-subtitle3">
          Check out my projects by navigating to the Projects page on the navbar above or by clicking{' '}
          <Link to="/projects" className="link-here">here</Link>.
        </p>
      </section>

      <section className="about-section">
        <h2>Interests & Hobbies</h2>
        <p>Outside of coding, I usually spend my time gaming, and also exercise regularly, running frequently as well as play badminton</p>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <p>I'm currently completing my Bachelor's of Computer Science in Nanyang Technological University, expected to graduate in July 2027</p>
      </section>

      <section className="about-section">
        <h2>Work Experience</h2>
        <ul>
          <li>Software Developer Intern at Accrets International Pte Ltd (Jan 2023 - May 2023)</li>
          <li>Fullstack Web Developer Intern at Amber Creative Pte Ltd (Jul 2025 - Dec 2025)</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Python</li>
          <li>MYSQL</li>
          <li>HTML & CSS</li>
          <li>Java</li>
          <li>C++</li>
          <li>C</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
