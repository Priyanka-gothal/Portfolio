import { ReactTyped } from "react-typed";
import "../styles/hero.css";
import profile from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="home" id="home">

      {/* LEFT CONTENT */}
      <div className="home-text" data-aos="fade-right">
        <h1>Hello, It's Me</h1>

        <h2>
          <span>Priyanka Gothal</span>
        </h2>

        <h3>
          And I'm a{" "}
          <span className="highlight">
            <ReactTyped
              strings={["Web Developer", "React Developer", "Frontend Engineer"]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </span>
        </h3>

        <p>
          Passionate about building modern, responsive, and user-friendly web
          applications.
        </p>

        <div className="social-icons">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Priyanka-gothal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>


        </div>

        <a
          href="/Resume_Priyanka_Gothal.pdf"
          download
          className="btn glow-btn"
        >
          Download CV
        </a>

      </div>

      {/* RIGHT IMAGE */}
  <div className="home-img">
  <div className="hover-frame">
    <img src={profile} alt="Priyanka Gothal" />
  </div>
</div>





    </section>
  );
}
