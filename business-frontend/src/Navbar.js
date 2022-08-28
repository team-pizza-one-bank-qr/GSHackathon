import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="decorate">
      <nav class="navbar navbar-light">
        <div class="brand">
          <img class="logo" src="/Logo.png"/>
          <a class="name" href="/">
            OneBankQR
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
