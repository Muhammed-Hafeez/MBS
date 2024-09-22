// MainLayout.js
import React from "react";
import { Header, NavLinks } from "../components/common/Header";
import SideNav from "../components/common/SideNav";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = ({setToggleNav, toggleNav}) => {
  return (
    <>
      <Header setToggleNav={setToggleNav} />
      <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}>
        <NavLinks
          navlinkClasses="navlinks navlinkside"
          setToggleNav={setToggleNav}
        />
      </SideNav>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
