import React, { useState } from "react";
import logo from "../assets/images/MartyLogo.png";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // open/close the hamburger menu
  const toggleHamburger = (e) => {
    // if the current target has a class including the bar keyword, set the toggle class to its direct parent
    if (e.target.classList.contains("bar")) {
      console.log(e.target.parentNode);
      e.target.parentNode.classList.toggle("change");
    } else if (e.target.classList.contains("Hamburger-icon")) {
      e.target.classList.toggle("change");
    }
    // otherwise if the current target has a class that is hamburger-icon, set that toggle class
    // x.target.classList.toggle("change");
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="Header-container">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />
        <nav>
          <ul className="Desktop-nav">
            <li>
              <a href="#consultation">Consultation</a>
            </li>
            <li>
              <a href="#restoration">Restoration</a>
            </li>
            <li>
              <a href="#maintainance">Maintainance</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            {/* <li>Contact Us</li> */}
          </ul>

          {/* Hambuger menu on mobile view */}
          <div className="Hamburger-wrapper">
            <div className="Hamburger-icon" onClick={toggleHamburger}>
              <div className="bar1 bar"></div>
              <div className="bar2 bar"></div>
              <div className="bar3 bar"></div>
            </div>
            <HamburgerMenu toggleHamburger={hamburgerOpen} />
          </div>
        </nav>
      </header>
      <section className="Hero-image">
        <section className="Hero-text">
          <h1>Marty's Pool Service</h1>
          <ul>
            <li>SORRENTO, FL</li>
            <li>BLUEPOOLDOCTOR@GMAIL.COM</li>
            <li>407-227-8733</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
