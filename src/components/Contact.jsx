import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <p className="contact-subtitle">
          Have a project or just want to say hi? Let’s build something together ✨
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always open to discussing projects, frontend roles,
            or creative ideas.
          </p>

          <div className="contact-card">
            <span>📧</span>
            <a href="priyankagothal0510@gmail.com">
              priyankagothal0510@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <span>💻</span>
            <a
              href="https://github.com/Priyanka-gothal"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="contact-card">
            <span>💼</span>
            <a
              href="https://www.linkedin.com/in/priyanka-gothal/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xyznzgev"
          method="POST"
        >

          <div className="input-group">
            <input type="text" name="name" required />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <textarea name="message" rows="5" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="btn glow-btn">
            Send Message 🚀
          </button>

        </form>

      </div>
    </section>
  );
}