import logo from "./assets/images/MartyLogo.png";
import project1 from "./assets/images/project.jpeg";
import project2 from "./assets/images/project2.jpeg";
import project3 from "./assets/images/project3.jpeg";
import project4 from "./assets/images/project4.jpeg";
import project5 from "./assets/images/project5.jpeg";
import project6 from "./assets/images/project6.jpeg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header-container">
        <header className="App-header">
          <img src={logo} className="Logo" alt="logo" />
          <nav>
            <ul>
              <li>Consultation</li>
              <li>Restoration</li>
              <li>Maintainance</li>
              <li>Gallery</li>
              {/* <li>Contact Us</li> */}
            </ul>
          </nav>
        </header>
        <section className="Hero-image">
          <section className="Hero-text">
            <h1>Marty's Pool Service</h1>
            <ul>
              <li>
                Sorrento, FL <span>|</span>
              </li>
              <li>
                BLUEPOOLDOCTOR@GMAIL.COM <span>|</span>
              </li>
              <li>407-227-8733</li>
            </ul>
          </section>
        </section>
      </div>
      <main>
        <section className="Services">
          <ul>
            <li class="Service Service-consultation">
              <div className="Service-details">
                <h3>Consultation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li class="Service Service-restoration">
              <div className="Service-details">
                <h3>Restoration</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li class="Service Service-maintainance">
              <div className="Service-details">
                <h3>Maintainance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="Photo-gallery">
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
            <p>Back to Top</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
