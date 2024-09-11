import { Header, NavLinks } from "./components/common/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import SideNav from "./components/common/SideNav";
import { useState } from "react";
import Home from "./components/pages/Home";

function App() {
  const [toggleNav, setToggleNav] = useState("100vw");
  return (
    <div className="App">
      <HashRouter>
        <Header setToggleNav={setToggleNav} />
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}>
          <NavLinks navlinkClasses="navlinks navlinkside" setToggleNav={setToggleNav}></NavLinks>
        </SideNav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/projects" element={<div>projects</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
