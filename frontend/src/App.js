import { Header, NavLinks } from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./components/common/SideNav";
import React, { Suspense, useState } from "react";
import Footer from "./components/common/Footer";
import ScrollToTop from "./utils/scrollTop.js";
import Spinner from "./components/Spinner.js";
import NotFoundPage from "./pages/NotFound.js";
const Project = React.lazy(() => import("./pages/Project.js"));
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home.js"));
const ContactUs = React.lazy(() => import("./pages/ContactUs.js"));
const Projects = React.lazy(() => import("./pages/Projects.js"));
const Services = React.lazy(() => import("./pages/Services.js"));
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
          <Route
            path="/services"
            element={
              <Suspense fallback={<Spinner />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Spinner />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Spinner />}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="/project"
            element={
              <Suspense fallback={<Spinner />}>
                <Project />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
