import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";


export function Header() {
  const [isActive, setActive] = useState(false);
  const [isLight, setIsLight] = useState(true); // ✅ Theme toggle state

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setIsLight(!isLight);
  }

  // ✅ Set light theme by default
  useEffect(() => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.add("light"); // add light mode by default
    setIsLight(true);
  }, []);

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Aarif Hussain "}</span>
          <span>{" A Nassar/>"}</span>
        </HashLink>

        {/* Toggle checkbox */}
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
          checked={isLight} // ✅ checkbox checked state
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a
            href="https://drive.google.com/uc?export=download&id=1lJ44fQTdx2XF2ZoGFEHuBUcyWemKPSHP"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Resume
          </a>
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
