import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              About
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="header_logo">
        Logo
      </div>
      <div className="header_profile">
        Profile
      </div>
    </div>
  );
}

export default Header;
