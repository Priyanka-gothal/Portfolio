import { useState } from "react";
import "../styles/projects.css";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="projects-subtitle">
          Turning ideas into modern, interactive and real-world digital
          experiences.
        </p>
      </div>

      {/* FEATURED PROJECTS */}

      <div className="projects-grid">

        {/* TASKTRACKER */}

        <div className="project-card" data-aos="fade-up">
          <div className="project-overlay"></div>

          <div className="project-icon">📋</div>

          <h3>TaskTracker</h3>

          <p>
            Modern full-stack productivity platform with authentication,
            notifications, profile system and interactive Kanban dashboard
            inspired by modern SaaS products.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>Tailwind</span>
          </div>

          <a
            href="https://github.com/Priyanka-gothal/TaskTracker"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            💻 Source Code
          </a>
        </div>

        {/* ALGORITHM */}

        <div
          className="project-card"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="project-overlay"></div>

          <div className="project-icon">⚡</div>

          <h3>Algorithm Visualizer</h3>

          <p>
            Interactive visualization platform demonstrating sorting and
            searching algorithms with animated step-by-step execution and
            intuitive React-based UI.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <a
            href="https://github.com/Priyanka-gothal/Algorithm-Visualizer"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            💻 Source Code
          </a>
        </div>

        {/* SELF DRIVING */}

        <div
          className="project-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="project-overlay"></div>

          <div className="project-icon">🚗</div>

          <h3>Self Driving Car</h3>

          <p>
            Low-cost autonomous vehicle prototype using Raspberry Pi, Arduino
            and computer vision for obstacle detection, stop sign recognition
            and smart navigation.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>OpenCV</span>
            <span>Raspberry Pi</span>
            <span>Arduino</span>
          </div>

          <a
            href="https://github.com/Priyanka-gothal/Self_Driving_Car"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            💻 Source Code
          </a>
        </div>
      </div>

      {/* MORE BUTTON */}

      <div className="more-btn-wrapper">
        <button
          className="more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore
            ? "Show Less ↑"
            : "✨ View More Projects ↓"}
        </button>
      </div>

      {/* MORE PROJECTS */}

      <div
        className={`extra-projects ${
          showMore ? "show" : ""
        }`}
      >
        <div className="projects-grid small-grid">

          {/* PASSWORD */}

          <div className="project-card small-card">
            <div className="project-icon">🔐</div>

            <h3>Password Manager</h3>

            <p>
              Password manager built with React and Tailwind using
              LocalStorage with add, update and delete features.
            </p>

            <a
              href="https://github.com/Priyanka-gothal/Password-Manager"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              💻 Source Code
            </a>
          </div>

          {/* EVENT */}

          <div className="project-card small-card">
            <div className="project-icon">🎫</div>

            <h3>Event Management</h3>

            <p>
              College event management platform using HTML, CSS,
              JavaScript and PHP.
            </p>

            <a
              href="https://github.com/Priyanka-gothal/Event-Management-System"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              💻 Source Code
            </a>
          </div>

          {/* REQRES */}

          <div className="project-card small-card">
            <div className="project-icon">👥</div>

            <h3>Reqres User App</h3>

            <p>
              React-based user management application with authentication,
              pagination and API integration.
            </p>

            <a
              href="https://github.com/Priyanka-gothal/Employ-Wise-Assignment"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              💻 Source Code
            </a>
          </div>

          {/* PLACEHOLDER */}

          <div className="project-card small-card">
            <div className="project-icon">✨</div>

            <h3>Mini Frontend Projects</h3>

            <p>
              Collection of UI experiments and JavaScript mini projects
              including games, API apps and animations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}