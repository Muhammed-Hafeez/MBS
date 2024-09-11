import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
function NavLinks({ navlinkClasses = "", setToggleNav = null }) {
  function toggleNavigation() {
    if (setToggleNav != null) {
      setToggleNav("100vw");
    }
  }
  return (
    <ul className={navlinkClasses}>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/"
          onClick={toggleNavigation}
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/about"
          onClick={toggleNavigation}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/services"
          onClick={toggleNavigation}
        >
          services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/projects"
          onClick={toggleNavigation}
        >
          projects
        </NavLink>
      </li>
    </ul>
  );
}
function Header({ setToggleNav }) {
  return (
    <header className="Header">
      <nav className="navigation">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="MBS" />
          </NavLink>
        </div>
        <NavLinks navlinkClasses="navlinks navlinks-hidden" />
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "btn btn-nav btn-active" : "btn  btn-nav"
          }
        >
          contact us
        </NavLink>
        <div
          className="hamburger-menu"
          onClick={() => {
            setToggleNav("0px");
          }}
        ></div>
      </nav>
    </header>
  );
}

export { Header, NavLinks };
