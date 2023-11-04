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
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
