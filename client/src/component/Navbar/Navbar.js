import React from "react";
import logo from "./img/LOGO-01.png";
import "./nav.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a className="logo-img-link" href="/">
            <img src={logo} width="50" height="50" alt="" />
          </a>
        </div>
        <div className="navbar">
          <a href="/">About</a>
          <a href="/portfolio">Portfolio</a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
