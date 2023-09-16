import React, { useState } from "react";
import logo from "./assets/images/MartyLogo.png";
import HamburgerMenu from "./components/HamburgerMenu";
import project1 from "./assets/images/project.jpeg";
import project2 from "./assets/images/project2.jpeg";
import project3 from "./assets/images/project3.jpeg";
import project4 from "./assets/images/project4.jpeg";
import project5 from "./assets/images/project5.jpeg";
import project6 from "./assets/images/project6.jpeg";
import "./App.css";
import "./assets/styles/HamburgerMenu.css";

function App() {
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

  const scrollToTop = () => {
    console.log("scroll to top");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
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
      <main>
        <section className="Services">
          <ul>
            <li className="Service Service-consultation" id="consultation">
              <div className="Service-details">
                <h3>Consultation</h3>
                <p>
                  From repairs and renovations to general maintainance, we can
                  cover all aspects of your aquatic environment needs. With over
                  30 years of experience, Martin Simmermacher has extensive
                  knowledge to answer any question that may arise.
                </p>
              </div>
            </li>
            <li className="Service Service-restoration" id="restoration">
              <div className="Service-details">
                <h3>Restoration</h3>
                <p>
                  Make your pool look like new with an over haul of your
                  existing aquatic environment. Proceed with confidence knowing
                  that your needs and desires will be met by an expert.
                </p>
              </div>
            </li>
            <li className="Service Service-maintainance" id="maintainance">
              <div className="Service-details">
                <h3>Maintainance</h3>
                <p>
                  Rest assured that your aquatic enviorments will be maintained
                  with utmost care by our trained and experienced technicians.
                  There is no condition that cannot be improved in order to
                  bring your pool back to life and keep it pristine.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="Photo-gallery" id="gallery">
          <section className="Photos">
            <img src={project1} className="Project-photo" alt="project-photo" />
            <img src={project2} className="Project-photo" alt="project-photo" />
            <img src={project3} className="Project-photo" alt="project-photo" />
            <img src={project4} className="Project-photo" alt="project-photo" />
            <img src={project5} className="Project-photo" alt="project-photo" />
            <img src={project6} className="Project-photo" alt="project-photo" />
          </section>
        </section>
        <footer>
          {/* <div>
            <a href="">
              <img
                src={project1}
                className="Facebook-icon"
                alt="facebook-icon"
              />
            </a>
          </div> */}
          <div>
            <p onClick={scrollToTop}>Back to Top</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
