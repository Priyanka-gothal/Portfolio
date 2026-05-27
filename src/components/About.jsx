import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-content">

          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          {/* ROLE */}
          <div className="role-box">
            <h3>
              Full Stack Developer creating
              <span> modern & interactive web experiences</span>
            </h3>

            <div className="role-line"></div>
          </div>

          {/* ABOUT */}
          <p>
            Hi, I'm <span className="highlight">Priyanka Gothal</span> —
            passionate about building
            <span className="highlight"> modern</span>,
            <span className="highlight"> responsive</span> and
            <span className="highlight"> user-focused</span>
            digital experiences.

            I enjoy transforming ideas into clean and interactive interfaces
            while focusing on performance, usability and seamless user
            experience.

            My work primarily involves
            <b> React</b>, <b> JavaScript</b>,
            <b> APIs</b>, <b> Tailwind CSS</b>,
            <b> Node.js</b>, <b> MongoDB</b>,
            <b> SQL</b> and <b> Python</b>.
          </p>

          {/* SKILL CLOUD */}
          <div className="skills">

            <span>⚛ React</span>
            <span>🟨 JavaScript</span>
            <span>🌐 HTML/CSS</span>
            <span>🎨 Tailwind CSS</span>
            <span>🔗 REST APIs</span>
            <span>🟢 Node.js</span>
            <span>🍃 MongoDB</span>
            <span>🗄 SQL</span>
            <span>🐍 Python</span>
            <span>🔧 Git/GitHub</span>
            <span>📱 Responsive UI</span>
            <span>✨ UI Design</span>

          </div>

          {/* STATS */}
          <div className="stats">

            <div className="stat-card">
              <h4>3+</h4>
              <p>Featured Projects</p>
            </div>

            <div className="stat-card">
              <h4>8+</h4>
              <p>Mini Projects</p>
            </div>

            <div className="stat-card">
              <h4>∞</h4>
              <p>Learning</p>
            </div>

          </div>

          {/* CTA */}
          <button
            className="btn glow-btn"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Explore Projects ✨
          </button>

        </div>

      </div>

    </section>
  );
}