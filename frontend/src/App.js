import { Header, NavLinks } from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./components/common/SideNav";
import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import About from "./pages/About";

function App() {
  const [toggleNav, setToggleNav] = useState("100vw");
  return (
    <div className="App">
      <BrowserRouter>
        <Header setToggleNav={setToggleNav} />
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}>
          <NavLinks navlinkClasses="navlinks navlinkside" setToggleNav={setToggleNav}></NavLinks>
        </SideNav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/projects" element={<div>projects</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
