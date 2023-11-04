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
import Services from "./components/Services";
import Gallery from "./components/Gallery";

function App() {
  const scrollToTop = () => {
    console.log("scroll to top");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Gallery />
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
