import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    console.log("scroll to top");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
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
  );
}
