import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun, FaPhone, FaCheckCircle, FaGraduationCap, FaCertificate, FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const projects = [
  {
    title: 'Excel Automation with Python',
    description: 'Automate data cleaning and formatting across multiple Excel files, reducing manual work by 90%.',
    tech: ['Python', 'pandas', 'openpyxl'],
    github: 'https://github.com/esiri01/portfolio-website/tree/main/projects/Project1',
  },
  {
    title: 'Text Classification using NLP',
    description: 'Classify open-ended survey responses into categories using zero-shot NLP (BART).',
    tech: ['Python', 'transformers', 'scikit-learn'],
    github: 'https://github.com/esiri01/portfolio-website/tree/main/projects/Project2',
  },
  {
    title: 'Automated PDF Report Extraction',
    description: 'Extract tables from PDF reports and convert them into clean CSVs.',
    tech: ['Python', 'tabula-py', 'pandas'],
    github: 'https://github.com/esiri01/portfolio-website/tree/main/projects/Project3',
  },
  {
    title: 'Data Dashboard: Sales Performance',
    description: 'Power BI dashboard visualizing monthly sales data by region, product, and rep.',
    tech: ['Power BI', 'DAX', 'SQL'],
    github: 'https://github.com/esiri01/portfolio-website/tree/main/projects/Project4',
  },
  {
    title: 'Web Scraping for Lead Generation',
    description: 'Scrape business directories to gather company leads (name, phone, address, email, rating).',
    tech: ['Python', 'requests', 'BeautifulSoup', 'pandas'],
    github: 'https://github.com/esiri01/portfolio-website/tree/main/projects/Project5',
  },
];

const experience = [
  {
    title: 'Requirements Management Analyst',
    company: 'SkyAlyne',
    period: 'September 2024 – Present',
    highlights: [
      'Develop and manage requirements baselines for complex aviation and defense projects',
      'Apply machine learning algorithms to classify tasks, improving project efficiency by 30%',
      'Develop and implement scripts and macros to automate routine tasks, improving efficiency by 80%',
      'Collaborate with Program Management and Integrated Product Teams (IPTs) to document and verify key project deliverables',
      'Present complex data insights and technical analysis to non-technical stakeholders'
    ]
  },
  {
    title: 'Analytics Engineer - Manufacturing & Process Optimization',
    company: 'De Havilland Aircraft of Canada Ltd',
    period: 'February 2022 – July 2024',
    highlights: [
      'Designed and deployed operational dashboards, data models, and metrics using Python, SQL, and Power BI',
      'Developed machine learning models to predict lead times for aircraft parts, reducing production delays by 15%',
      'Developed optimization models for ideal workforce allocation, balancing multiple constraints',
      'Extracted, manipulated, and analyzed large datasets using SQL, Python, Pandas, and Numpy',
      'Applied Natural Language Processing (NLP) techniques to classify manufacturing operations',
      'Created and Managed ETL pipelines to streamline data processing and integration with ERP systems'
    ]
  },
  {
    title: 'Analyst – Aircraft Performance',
    company: 'Navblue, an Airbus Company',
    period: 'April 2020 – February 2022',
    highlights: [
      'Applied advanced analytical techniques to decipher complex aircraft performance data',
      'Analyzed large datasets using SQL and Python, unveiling critical insights into aircraft performance and safety',
      'Optimized operational efficiency by transitioning document review processes and managing task prioritization through Jira'
    ]
  },
  {
    title: 'Business Analyst / Management Consultant',
    company: 'Stymiest Incorporated',
    period: 'July 2017 - September 2018',
    highlights: [
      'Facilitated stakeholder workshops and interviews, yielding key insights for refining project strategies',
      'Implemented rigorous data analysis methods, including cost analyses, resulting in optimized decision-making',
      'Developed comprehensive procedure manuals, enhancing team efficiency',
      'Innovated action log management with Excel VBA macros, reducing manual effort'
    ]
  }
];

const education = [
  {
    degree: 'Master of Science, Analytics (In Progress)',
    school: 'Georgia Institute of Technology, USA'
  },
  {
    degree: 'Master of Engineering, Aerospace Engineering',
    school: 'Concordia University, Montreal, Canada'
  },
  {
    degree: 'Bachelor of Engineering, Mechanical Engineering',
    school: 'Covenant University'
  },
  {
    degree: 'Data Engineer with Python Career Track',
    school: 'datacamp.com'
  }
];

const certifications = [
  'Professional Engineer – Professional Engineers Ontario',
  'Project Management Professional – Project Management Institute',
  'Amazon Web Services – AWS Certified Cloud Practitioner',
  'Certified Associate - SAP TERP 10 – SAP ERP (Integration of Business Processes)'
];

const skills = {
  'Programming Languages': ['Python', 'SQL', 'R', 'JavaScript', 'Matlab', 'Excel VBA'],
  'Machine Learning Tools': ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras'],
  'Data Analysis & Visualization': ['Power BI', 'QlikView', 'Tableau', 'Crystal Reports', 'Pandas', 'NumPy'],
  'Big Data & Cloud Platforms': ['AWS', 'GCP', 'Spark', 'Databricks', 'Apache Airflow'],
  'MLOps & CI/CD': ['Docker', 'GitHub'],
  'Software & Workflow Tools': ['Microsoft Project', 'Microsoft Visio', 'Jira', 'IBM DOORS']
};

function App() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: '', email: '', message: '' });
      alert('Message sent!');
    }, 1200);
  };

  const toggleDarkMode = () => setDarkMode(dm => !dm);
  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  // Smooth scroll to section
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      {/* Header Navigation */}
      <header className="main-header">
        <div className="container header-container">
          <div className="header-left">
            <span className="header-logo">Esiri</span>
          </div>
          <nav className="header-nav">
            <ul className="nav-links">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={e => handleNavClick(e, link.id)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <button className="icon-btn" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="icon-btn hamburger" onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="mobile-menu">
            <ul>
              {navLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={e => handleNavClick(e, link.id)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-top">
            {/* Dark mode toggle moved to header */}
          </div>
          <h1 className="hero-title">Esiri Onokurhefe, P.Eng., PMP</h1>
          <p className="hero-subtitle">Data Science & Analytics Professional</p>
          <p className="hero-location">Canada</p>
          <div className="hero-links">
            <a href="tel:226-339-6421" className="icon-btn"><FaPhone /></a>
            <a href="mailto:esiri.onokurhefe@gmail.com" className="icon-btn" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://github.com/esiri01" className="icon-btn" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/esiri-onokurhefe/" className="icon-btn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about container" id="about">
        <h2>About Me</h2>
        <p className="about-text">
          Results-driven Data Science & Analytics professional, specializing in machine learning, statistical analysis, and data-driven decision-making. Proficient in Python, SQL, and collaborative coding environments, with a track record of delivering innovative analytics solutions that drive operational efficiency and streamline complex systems. Adept at translating data insights into actionable business strategies and influencing cross-functional teams.
        </p>
      </section>

      <hr />

      {/* Skills */}
      <section className="skills container" id="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div className="skill-card" key={category}>
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, i) => (
                  <span className="tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Experience */}
      <section className="experience container" id="experience">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          {experience.map((job, idx) => (
            <div className="experience-card" key={idx}>
              <div className="experience-header">
                <h3>{job.title}</h3>
                <span className="badge">{job.period}</span>
              </div>
              <div className="company">{job.company}</div>
              <ul className="highlights">
                {job.highlights.map((highlight, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Education & Certifications */}
      <section className="education-certifications container" id="education">
        <div className="education">
          <h2><FaGraduationCap className="section-icon" /> Education</h2>
          <div className="education-list">
            {education.map((edu, idx) => (
              <div className="education-card" key={idx}>
                <div className="degree">{edu.degree}</div>
                <div className="school">{edu.school}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="certifications">
          <h2><FaCertificate className="section-icon" /> Certifications</h2>
          <div className="certification-list">
            {certifications.map((cert, idx) => (
              <div className="certification-card" key={idx}>{cert}</div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* Projects */}
      <section className="projects container" id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span className="tag" key={i}>{t}</span>
                ))}
              </div>
              <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* Contact */}
      <section className="contact container" id="contact">
        <h2>Contact Me</h2>
        <p>Interested in working together or have a question? Send me a message!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} required />
          </div>
          <button type="submit" className="btn" disabled={submitting}>{submitting ? 'Sending...' : 'Send Message'}</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Esiri Onokurhefe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
