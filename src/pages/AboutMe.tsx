import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import '../styles/pagecss/about.css';

const AboutMe = () => {
  useRevealOnScroll(); // simple scroll-reveal

  return (
    <div className="about-container">
      <Navbar />

      <main className="content">
        <section className="hero">
          <h1 className="hero-title cursor typewriter-animation">
            Hi, I'm Yu Siang
          </h1>
          <p className="hero-subtitle reveal">
            I'm a computer science student who is a passionate developer building modern and interactive web experiences.
          </p>
          <p className="hero-subtitle reveal">
            I enjoy learning new technologies and building projects that solve real-world problems.
          </p>
          <p className="hero-subtitle reveal">
            Check out my projects via the navigation above or click{' '}
            <Link to="/projects" className="link subtle-underline">here</Link>.
          </p>
        </section>

        <section className="section card reveal">
          <h2>Interests &amp; Hobbies</h2>
          <p>
            Outside of coding, I usually spend my time gaming.
          </p>
        </section>

        <section className="section card reveal">
          <h2>Education</h2>
          <p>
            I'm currently completing my Bachelor's of Computer Science in Nanyang Technological University, expected to graduate in July 2027.
          </p>
        </section>

        <section className="section card reveal">
          <h2>Work Experience</h2>
          <ul className="timeline">
            <li>
              <span className="dot" />
              <div className="timeline-card">
                <h3>Software Developer Intern · Accrets International Pte Ltd</h3>
                <p className="time">Jan 2023 – May 2023</p>
              </div>
            </li>
            <li>
              <span className="dot" />
              <div className="timeline-card">
                <h3>Fullstack Web Developer Intern · Amber Creative Pte Ltd</h3>
                <p className="time">Jul 2025 – Dec 2025</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="section card reveal">
          <h2>Skills</h2>
          <ul className="skills-list chip-grid">
            <li className="chip">JavaScript</li>
            <li className="chip">React.js</li>
            <li className="chip">Node.js</li>
            <li className="chip">Next.js</li>
            <li className="chip">Python</li>
            <li className="chip">MySQL</li>
            <li className="chip">HTML &amp; CSS</li>
            <li className="chip">Java</li>
            <li className="chip">C++</li>
            <li className="chip">C</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
