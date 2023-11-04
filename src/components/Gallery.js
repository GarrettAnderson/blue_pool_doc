import React from "react";
import project1 from "../assets/images/project.jpeg";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpeg";
import project4 from "../assets/images/project4.jpeg";
import project5 from "../assets/images/project5.jpeg";
import project6 from "../assets/images/project6.jpeg";

export default function Gallery() {
  return (
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
  );
}
