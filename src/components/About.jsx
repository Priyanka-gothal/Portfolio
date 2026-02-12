import "../styles/about.css";
import aboutImg from "../assets/images/profile_photo.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-img">
          <div className="img-frame">
            <img src={aboutImg} alt="About Priyanka" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <h2>
            About <span>Me</span>
          </h2>

          <h3>Frontend & Full Stack Developer</h3>

          <p>
            Hi, I’m <span className="highlight">Priyanka Gothal</span> — a
            passionate developer who enjoys turning ideas into
            <span className="highlight"> clean</span>,
            <span className="highlight"> responsive</span> and
            <span className="highlight"> scalable</span> web applications.
            I mainly work with <b>React</b>, <b>Node.js</b> and <b>Python</b>.
          </p>

          {/* STATS */}
          <div className="stats">
            <div className="stat-card">
              <h4>3+</h4>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h4>∞</h4>
              <p>Learning</p>
            </div>

            <div className="stat-card">
              <h4>100%</h4>
              <p>Dedication</p>
            </div>
          </div>

          <button
            className="btn glow-btn"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work →
          </button>
        </div>
      </div>
    </section>
  );
}
