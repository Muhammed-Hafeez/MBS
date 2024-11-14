import React, { useState } from "react";
import "./CmsNav.css";
import WebData from "./cms/WebData";
import HeroData from "./cms/HeroData";
import AboutCard from "./cms/AboutCard";
import ProjectCard from "./cms/ProjectCard";
import ServiceCard from "./cms/ServiceCard";
import Swiper from "./cms/Swiper";
import TeamCard from "./cms/TeamCard";

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<WebData />);
          }}
        >
          web data
        </li>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<HeroData />);
          }}
        >
          hero data
        </li>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<ProjectCard />);
          }}
        >
          project card
        </li>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<ServiceCard />);
          }}
        >
          service card
        </li>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<Swiper />);
          }}
        >
          swiper data
        </li>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<TeamCard />);
          }}
        >
          Team Card
        </li>
        <li
          className="navbar-link"
          onClick={() => {
            setPage(<AboutCard />);
          }}
        >
          about card
        </li>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
