import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
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
          aria-label="home page"
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/about"
          onClick={toggleNavigation}
          aria-label="about page"
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/services"
          onClick={toggleNavigation}
          aria-label="services page"
        >
          services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "Link-active" : "")}
          to="/projects"
          onClick={toggleNavigation}
          aria-label="projects page"
        >
          projects
        </NavLink>
      </li>
    </ul>
  );
}
NavLinks.propTypes = {
  navlinkClasses: PropTypes.string,
  setToggleNav: PropTypes.any,
};

function Header({ setToggleNav }) {
  return (
    <header className="Header">
      <nav className="navigation">
        <div className="logo">
          <NavLink to="/">
            <img loading="lazy" src={logo} alt="MBS" />
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
        <Icon
          icon={"mdi:hamburger-menu"}
          onClick={() => {
            setToggleNav("0px");
          }}
          style={{ margin: "0px 2rem", width: "30px", height: "30px" }}
          className={"col-rare hamburger-menu"}
        />
      </nav>
    </header>
  );
}

Header.propTypes = { setToggleNav: PropTypes.any };

export { Header, NavLinks };
