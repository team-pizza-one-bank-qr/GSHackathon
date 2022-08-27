import React from "react";
import "./Navbar.css";
import logo from "./Logo.png";

const Navbar = () => {
  return (
    <div class="decorate">
      <nav class="navbar navbar-light">
        <div class="brand">
          <img class="logo" src={logo}></img>
          <a class="name" href="/">
            ONEBANKQR
          </a>
        </div>
        <div class="get-started">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="btn btn-dark m-2" href="/QR" role="button">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
