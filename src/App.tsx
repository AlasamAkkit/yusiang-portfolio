import { useMemo, useState, type CSSProperties } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './styles/portfolio.css';
import { experience, focusAreas, profile, projects, skills } from './data/portfolio';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const skillGroups = Object.entries(skills);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${contactName || 'visitor'}`);
    const body = encodeURIComponent(contactMessage || 'Hi Yu Siang,\n\n');
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [contactMessage, contactName]);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Yu Siang Chong home">
          <span className="brand-mark">YS</span>
          <span>
            <strong>{profile.name}</strong>
          </span>
        </a>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon fontSize="small" />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="small" />
            GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science @ NTU</p>
            <h1 id="hero-title">Full-stack developer building practical web products.</h1>
            <p className="hero-summary">{profile.intro}</p>

            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button primary-button" href="#work">
                <CodeIcon fontSize="small" />
                View projects
              </a>
              <a className="button secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize="small" />
                LinkedIn
              </a>
              <a className="button ghost-button" href={`mailto:${profile.email}`}>
                <MailOutlineIcon fontSize="small" />
                Email me
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Profile summary">
            <div className="profile-header">
              <img className="profile-photo" src={profile.avatar} alt={`${profile.name} GitHub avatar`} />
              <div>
                <p className="profile-name">{profile.name}</p>
                <p className="profile-role">Software engineer · Singapore</p>
              </div>
            </div>
            <div className="availability-card">
              <span className="status-dot" aria-hidden="true" />
              <span>Open to internships and graduate roles</span>
            </div>
            <dl className="profile-facts">
              <div>
                <dt>Focus</dt>
                <dd>Full-stack products, APIs, AFC systems</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Nanyang Technological University</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>@{profile.handle}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section-block intro-block" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2 id="about-title">I care about the full path from idea to usable product.</h2>
          </div>
          <div className="intro-grid">
            <p>{profile.summary}</p>
            <div className="focus-card">
              <h3>Currently improving</h3>
              <ul>
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-block" id="work" aria-labelledby="work-title">
          <div className="section-heading wide-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Projects that show product range and engineering fundamentals.</h2>
            </div>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
              See all repositories
              <ArrowOutwardIcon fontSize="small" />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual" style={{ '--project-accent': project.accent } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div className="visual-window">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="project-content">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <ul className="tech-list" aria-label={`${project.title} technologies`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowOutwardIcon fontSize="small" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Internship experience</h2>
          </div>
          <div className="timeline-list">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <WorkOutlineIcon fontSize="small" />
                <div>
                  <p>{item.period}</p>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <span>{item.details}</span>
                </div>
              </article>
            ))}
            <article className="timeline-item education-item">
              <SchoolIcon fontSize="small" />
              <div>
                <p>Expected Jun 2027</p>
                <h3>Bachelor of Computing (Hons) in Computer Science, 4.15/5.00 CGPA</h3>
                <strong>Nanyang Technological University</strong>
                <span>Building depth in software engineering, web systems, algorithms, and data structures.</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section-block" id="skills" aria-labelledby="skills-title">
          <div className="section-heading wide-heading">
            <div>
              <p className="eyebrow">Toolkit</p>
              <h2 id="skills-title">A stack built around shipping practical full-stack applications.</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skillGroups.map(([group, values]) => (
              <article className="skill-card" key={group}>
                <h3>{group}</h3>
                <ul>
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have a role, project, or collaboration in mind?</h2>
            <p>
              Send a short note and your mail app will open with the message ready. You can also reach me directly by
              email or LinkedIn.
            </p>
          </div>

          <form className="contact-card" onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input value={contactName} onChange={(event) => setContactName(event.target.value)} placeholder="Your name" />
            </label>
            <label>
              Message
              <textarea
                value={contactMessage}
                onChange={(event) => setContactMessage(event.target.value)}
                placeholder="Hi Yu Siang, I saw your portfolio and..."
                rows={5}
              />
            </label>
            <a className="button primary-button full-width-button" href={mailtoHref}>
              <MailOutlineIcon fontSize="small" />
              Draft email
            </a>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
