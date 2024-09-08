import React from "react";
import { NavLink } from "react-router-dom";

function SideNav({ children, toggleNav, setToggleNav }) {
  return (
      <nav className="sidenav" style={{ right: toggleNav }}>
        <div
          className={`close closeicon`}
          onClick={() => {
            setToggleNav("100vw");
          }}
        ></div>
        {children}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "btn btn-sidenav btn-active" : "btn btn-sidenav"
          }
        onClick={() => { setToggleNav("100vw") }}
        >
          contact us
        </NavLink>
      </nav>
  );
}

export default SideNav;
