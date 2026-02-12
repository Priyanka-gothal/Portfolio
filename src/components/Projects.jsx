import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        Latest <span>Projects</span>
      </h2>

      <div className="projects-grid">

        <div className="project-card" data-aos="zoom-in">
          <div className="project-overlay"></div>
          <h3>Algorithm Visualizer</h3>
          <p>
            Interactive visualization of sorting and pathfinding algorithms.
          </p>
          <a
            href="https://github.com/Priyanka-gothal/Algorithm-Visualizer"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </div>

        <div className="project-card" data-aos="zoom-in" data-aos-delay="150">
          <div className="project-overlay"></div>
          <h3>SafeWalk IoT</h3>
          <p>
            GPS-based safety application with real-time tracking features.
          </p>
          <a href="#" target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </div>

        <div className="project-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="project-overlay"></div>
          <h3>Self Driving Car</h3>
          <p>
            Machine learning based self-driving car simulation project.
          </p>
          <a
            href="https://github.com/Priyanka-gothal/Self_Driving_Car"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}
