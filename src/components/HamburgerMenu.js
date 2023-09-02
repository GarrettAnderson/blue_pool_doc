import React from "react";
import "../assets/styles/HamburgerMenu.css";

function HamburgerMenu(props) {
  return (
    <ul
      className="hamburger"
      style={{ display: props.toggleHamburger ? "none" : "flex" }}
    >
      <li className="burger burger1">
        <a href="#consultation">Consultation</a>
      </li>
      <li className="burger burger2">
        <a href="#restoration">Restoration</a>
      </li>
      <li className="burger burger3">
        <a href="#maintainance">Maintainance</a>
      </li>
      <li className="burger burger4">
        <a href="#gallery">Gallery</a>
      </li>
      {/* <li>Contact Us</li> */}
    </ul>
  );
}

export default HamburgerMenu;
