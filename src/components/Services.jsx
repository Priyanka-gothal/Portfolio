import "../styles/services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>

      <div className="services-grid">

        <div className="service-card" data-aos="fade-up">
          <div className="icon">💻</div>
          <h3>Web Development</h3>
          <p>
            Building fast, secure, and fully responsive websites using modern
            web technologies.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="150">
          <div className="icon">⚛️</div>
          <h3>Frontend Development</h3>
          <p>
            Interactive UI development using React, JavaScript, and clean CSS
            architecture.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="450">
    <div className="icon">🛠️</div>
    <h3>Backend Development</h3>
    <p>
      Building REST APIs using Node.js, Express, MongoDB with secure
      authentication.
    </p>
  </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">🎨</div>
          <h3>UI / UX Design</h3>
          <p>
            User-centered designs with smooth flow, accessibility, and modern
            aesthetics.
          </p>
        </div>

      


      </div>
    </section>
  );
}
