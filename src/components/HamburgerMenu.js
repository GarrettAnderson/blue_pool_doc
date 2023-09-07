import React from "react";
import "../assets/styles/HamburgerMenu.css";

function HamburgerMenu(props) {
  return (
    <ul
      className="Hamburger"
      style={{ display: props.toggleHamburger ? "none" : "flex" }}
    >
      <li className="Burger Burger1">
        <a href="#consultation">Consultation</a>
      </li>
      <li className="Burger Burger2">
        <a href="#restoration">Restoration</a>
      </li>
      <li className="Burger Burger3">
        <a href="#maintainance">Maintainance</a>
      </li>
      <li className="Burger Burger4">
        <a href="#gallery">Gallery</a>
      </li>
      {/* <li>Contact Us</li> */}
    </ul>
  );
}

export default HamburgerMenu;
