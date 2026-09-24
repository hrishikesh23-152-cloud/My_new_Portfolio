"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Server,
  Sparkles,
  Terminal,
  X,
  Zap
} from "lucide-react";
import data from "./data/data.json";

const capabilities = [
  {
    icon: <Server size={28} />,
    number: "01",
    title: "Backend & Microservices",
    text: "Building modular Node.js applications featuring an API Gateway, Auth Service, Task Service, and Media Service connected with Apache Kafka."
  },
  {
    icon: <Layers3 size={28} />,
    number: "02",
    title: "Full-Stack UI, Caching & Queues",
    text: "Creating React.js interfaces connected to Node.js backends with Redis rate-limiting, caching, and BullMQ background workers."
  },
  {
    icon: <Sparkles size={28} />,
    number: "03",
    title: "AI Integration & Groq LLMs",
    text: "Integrating Groq LLMs into web services to parse user inputs (resumes, targets) and generate reliable, structured JSON reports."
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const profile = data.profile;
  const projects = data.projects;
  const experience = data.experience;
  const skills = data.skills;

  return (
    <main>
      {/* Navigation */}
      <nav className="nav-shell">
        <a className="brand" href="#top">
          H.B<span>.</span>
          <span className="sub-title">Full-Stack &amp; Backend</span>
        </a>

        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#capabilities">Focus Areas</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <a
            className="nav-social-btn"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            className="nav-social-btn"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Contact Me <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="mobile-menu">
            <a onClick={() => setOpen(false)} href="#work">
              Projects
            </a>
            <a onClick={() => setOpen(false)} href="#capabilities">
              Focus Areas
            </a>
            <a onClick={() => setOpen(false)} href="#experience">
              Experience
            </a>
            <a onClick={() => setOpen(false)} href="#skills">
              Skills
            </a>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
            <a
              onClick={() => setOpen(false)}
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
            <a onClick={() => setOpen(false)} href={`mailto:${profile.email}`}>
              Contact Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="top" className="hero section-pad">
        <div className="hero-grid" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="availability"
        >
          <i /> Open for Entry-Level Full-Stack &amp; Backend Roles
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="eyebrow"
        >
          ENTRY-LEVEL FULL-STACK ENGINEER · BACKEND FOCUS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          Building responsive frontends &amp; <em>scalable backends.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="hero-bottom"
        >
          <p className="hero-sub">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="hero-btn-primary" href="#work">
              Explore Projects <ArrowDownRight size={18} />
            </a>
            <a
              className="hero-btn-secondary"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub Profile
            </a>
          </div>
        </motion.div>

        <div className="social-pills">
          <a
            className="social-pill"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} /> github.com/hrishikesh23-152-cloud
          </a>
          <a
            className="social-pill"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} /> linkedin.com/in/hbj04
          </a>
          <a
            className="social-pill"
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={14} /> LeetCode Profile
          </a>
          <a
            className="social-pill"
            href={profile.socials.gfg}
            target="_blank"
            rel="noreferrer"
          >
            <Terminal size={14} /> GeeksforGeeks Profile
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="work section-pad">
        <div className="section-top">
          <div>
            <p className="eyebrow">MY PROJECTS</p>
            <h2>
              Things I&apos;ve built,
              <br />
              <em>what I&apos;ve learned.</em>
            </h2>
          </div>
          <p className="section-note">
            Full-stack web applications, backend services, microservices architectures, and Redis caching systems I&apos;ve developed.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250 }}
              className={`project-card project-${index + 1}`}
              key={project.id}
            >
              <div className="project-visual">
                <span className="project-index">0{index + 1}</span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="live-badge"
                  >
                    <i /> LIVE DEMO
                  </a>
                )}
                <div className="orb orb-one" />
                <div className="orb orb-two" />
                <Braces
                  className="visual-icon"
                  size={index === 0 ? 96 : 82}
                />
                <span className="visual-label">
                  {project.tags.slice(0, 2).join("  ·  ")}
                </span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      className="btn-live-demo"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Globe size={14} /> Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                  <a
                    className="btn-github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} /> GitHub Repo <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="services section-pad">
        <p className="eyebrow">WHAT I FOCUS ON</p>
        <div className="service-heading">
          <h2>
            Full-Stack &amp; Backend
            <br />
            <em>Key Concepts.</em>
          </h2>
          <p>
            Combining clean React.js frontends with robust Node.js backends and
            efficient database architectures.
          </p>
        </div>

        <div className="service-list">
          {capabilities.map((item) => (
            <div className="service" key={item.number}>
              <span className="service-no">{item.number}</span>
              <div className="service-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ArrowUpRight className="service-arrow" size={24} />
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="experience-section section-pad">
        <p className="eyebrow">INTERNSHIPS &amp; EXPERIENCE</p>
        <h2>
          Practical Engineering
          <br />
          <em>Experience.</em>
        </h2>

        <div className="exp-grid">
          {experience.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="exp-card"
              key={exp.title + exp.company}
            >
              <div className="exp-header">
                <div>
                  <h3>{exp.title}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-desc">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Breakdown */}
      <section id="skills" className="skills-detailed section-pad">
        <p className="eyebrow">TECH STACK &amp; TOOLING</p>
        <h2>
          Skills &amp; Technical
          <br />
          <em>Proficiency.</em>
        </h2>

        <div className="skills-categories">
          <div className="skill-cat-card">
            <h3>
              <Code2 size={18} /> Languages
            </h3>
            <div className="skill-tags-group">
              {skills.Languages.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <h3>
              <Server size={18} /> Backend &amp; Architecture
            </h3>
            <div className="skill-tags-group">
              {skills["Backend & Architecture"].map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <h3>
              <Layers3 size={18} /> Frontend &amp; Web UI
            </h3>
            <div className="skill-tags-group">
              {skills["Frontend & Web UI"].map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <h3>
              <Database size={18} /> Databases &amp; Caching
            </h3>
            <div className="skill-tags-group">
              {skills["Databases & Caching"].map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <h3>
              <Cpu size={18} /> Messaging &amp; Systems
            </h3>
            <div className="skill-tags-group">
              {skills["Messaging & Systems"].map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <h3>
              <Zap size={18} /> AI, DevOps &amp; Cloud
            </h3>
            <div className="skill-tags-group">
              {skills["AI, DevOps & Cloud"].map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-pad">
        <div className="about-stamp">
          <span>H</span>
          <span>B</span>
          <span>H</span>
          <span>B</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">ABOUT ME</p>
          <h2>
            Passionate about learning &amp; <em>building software.</em>
          </h2>

          <p className="about-text">{profile.bio}</p>

          <p className="about-text" style={{ marginTop: 0 }}>
            {profile.subheading} · Located in {profile.location}.
          </p>

          <div className="check-list">
            {[
              "Solid Computer Science & Algorithms Foundation",
              "Node.js, Express, React.js & Database Projects",
              "Backend Focus: Redis Caching, Microservices, BullMQ",
              "Active Problem Solver (LeetCode & GeeksforGeeks)"
            ].map((item) => (
              <span key={item}>
                <Check size={16} />
                {item}
              </span>
            ))}
          </div>

          <div className="about-links">
            <a
              className="text-link"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={17} />
            </a>
            <a
              className="text-link"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Strip Banner */}
      <section className="skills-strip">
        <p>TECHNOLOGY STACK</p>
        <div>
          {[
            "Node.js",
            "React.js",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Redis",
            "BullMQ",
            "Apache Kafka",
            "Groq LLM",
            "Docker",
            "Tailwind CSS",
            "Python"
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section-pad">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>
          Looking for an Entry-Level
          <br />
          <em>Full-Stack &amp; Backend Engineer?</em>
        </h2>

        <p className="contact-sub">
          I am actively seeking Entry-Level Full-Stack &amp; Backend Software Engineer opportunities. Feel free to reach out via email or check out my work!
        </p>

        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight size={28} />
        </a>

        <div className="contact-socials">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={19} /> GitHub Profile
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={19} /> LinkedIn Profile
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={19} /> LeetCode
          </a>
          <a
            href={profile.socials.gfg}
            target="_blank"
            rel="noreferrer"
          >
            <Terminal size={19} /> GeeksforGeeks
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={19} /> Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 {profile.fullName} · Entry-Level Full-Stack Engineer Portfolio</span>
        <span>
          Built with Next.js &amp; TypeScript{" "}
          <Zap size={14} fill="currentColor" />
        </span>
      </footer>
    </main>
  );
}
