import React, { useState, useEffect } from "react";
import "../app/globals.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Navbar stays visible for the first 100px (hero section)
      if (currentScrollY < 100) {
        setShow(true);
      } else if (currentScrollY > lastScrollY + 10) {
        // scrolling down
        setShow(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-transparent transition-transform duration-500 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="hcontainer">
        <h1>ARWIN JANOYAN</h1>
        <p className="title">BSIT Student | Web Developer & Virtual Assistant</p>
      </div>

      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact"
        onClick={(e) => {
          e.preventDefault(); // prevent default navigation
          alert("Contact section is coming soon!");
        }}>CONTACT</a></li>
          <li id="resume"><a href="/arwin-resume.pdf" download = "arwin-resume.pdf">RESUME</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
