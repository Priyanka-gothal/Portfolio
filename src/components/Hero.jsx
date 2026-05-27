import { ReactTyped } from "react-typed";
import "../styles/hero.css";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section className="home" id="home">

      {/* LEFT */}
      <div className="home-text" data-aos="fade-right">

        <h1>Hello, It's Me 👋</h1>

        <h2>Priyanka Gothal</h2>

        <h3>
          I'm a{" "}
          <span className="highlight">
            <ReactTyped
              strings={[
                "Frontend Developer",
                "React & UI Developer",
                "Interactive Web Developer",
                "Full Stack Builder",
                "UI/UX Enthusiast",
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </span>
        </h3>

        <p>
          Turning ideas into modern, scalable and interactive web experiences through thoughtful design and development.
        </p>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/priyanka-gothal/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Priyanka-gothal"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="hero-btns">
          <a
            href="/Priyanka_Gothal_Resume.pdf"
            download
            className="btn glow-btn"
          >
            Download CV
          </a>

          <a
            href="#projects"
            className="btn secondary-btn"
          >
            View Projects →
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="home-img"
        data-aos="fade-left"
      >
        <div className="hover-frame">
          <img
            src={profile}
            alt="Priyanka"
          />
        </div>
      </div>

    </section>
  );
}