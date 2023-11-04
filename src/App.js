import React from "react";
import Header from "./components/Header";
import project1 from "./assets/images/project.jpeg";
import project2 from "./assets/images/project2.jpeg";
import project3 from "./assets/images/project3.jpeg";
import project4 from "./assets/images/project4.jpeg";
import project5 from "./assets/images/project5.jpeg";
import project6 from "./assets/images/project6.jpeg";
import "./App.css";
import "./assets/styles/HamburgerMenu.css";

function App() {
  const scrollToTop = () => {
    console.log("scroll to top");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
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
