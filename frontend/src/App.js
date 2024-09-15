import { Header, NavLinks } from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./components/common/SideNav";
import React, { Suspense, useState } from "react";
const Home = React.lazy(() => import("./pages/Home.js"));
import Footer from "./components/common/Footer";
const About = React.lazy(() => import("./pages/About"));
import ScrollToTop from "./utils/scrollTop.js";
import Spinner from "./components/Spinner.js";
function App() {
  const [toggleNav, setToggleNav] = useState("100vw");
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header setToggleNav={setToggleNav} />
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}>
          <NavLinks
            navlinkClasses="navlinks navlinkside"
            setToggleNav={setToggleNav}
          ></NavLinks>
        </SideNav>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
          />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/projects" element={<div>projects</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
