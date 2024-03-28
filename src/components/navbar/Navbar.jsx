import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY >= 100) {
        setIsNavbar(true);
      } else {
        setIsNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <nav
      className={
        isNavbar
          ? "navbar navbar-expand fixed-top active"
          : "navbar navbar-expand fixed-top"
      }
    >
      <a href="#" className="navbar-brand">
        <span>C</span>ar Max
      </a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      <div>
      </div>
    </nav>
  );
};

export default Navbar;
