import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
function SideNav({ children, toggleNav, setToggleNav }) {
  return (
    <nav className="sidenav" style={{ right: toggleNav }}>
      <Icon
        icon={"iconoir:cancel"}
        className={`close closeicon`}
        onClick={() => {
          setToggleNav("100vw");
        }}
      ></Icon>
      {children}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "btn btn-sidenav btn-active" : "btn btn-sidenav"
        }
        onClick={() => {
          setToggleNav("100vw");
        }}
      >
        contact us
      </NavLink>
    </nav>
  );
}
SideNav.propTypes = {
  children: PropTypes.any,
  toggleNav: PropTypes.string,
  setToggleNav: PropTypes.func,
};

export default SideNav;
