import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-subtitle">
        Have a project or just want to say hi? Let’s talk 👋
      </p>

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
    </section>
  );
}
