import { useState, useEffect } from "react";
import "../styles/navbar.css";

const sections = ["home", "about", "services", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = -90; // navbar height
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const top = el.offsetTop - 120;
        const height = el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div
  className="logo glow"
  onClick={() => scrollToSection("home")}
>
  Portfolio<span>.</span>
</div>


      <nav className={`nav ${open ? "open" : ""}`}>
        <ul className="navlist">
          {sections.map((item) => (
            <li key={item}>
              <button
                className={`nav-btn ${active === item ? "active" : ""}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`menu-icon ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
