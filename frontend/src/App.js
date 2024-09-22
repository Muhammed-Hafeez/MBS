import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useState } from "react";
import ScrollToTop from "./utils/scrollTop.js";
import Spinner from "./components/Spinner.js";
import NotFoundPage from "./pages/NotFound.js";
import MainLayout from "./layouts/MainLayout.js";
import DashboardLayout from "./layouts/DashboardLayout.js";

// Lazy load the pages to improve initial load time
const Project = React.lazy(() => import("./pages/Project.js"));
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home.js"));
const ContactUs = React.lazy(() => import("./pages/ContactUs.js"));
const Projects = React.lazy(() => import("./pages/Projects.js"));
const Services = React.lazy(() => import("./pages/Services.js"));
const Enquiries = React.lazy(() => import("./Dashboard/pages/Enquiries.js"));
const Analytics = React.lazy(() => import("./Dashboard/pages/Analytics.js"));
const CMS = React.lazy(() => import("./Dashboard/pages/CMS.js"));
const Login = React.lazy(() => import("./Dashboard/pages/Login.js"));

function App() {
  // State to manage the visibility of the side navigation
  const [toggleNav, setToggleNav] = useState("100vw");

  return (
    <div className="App">
      {/* BrowserRouter manages the navigation between different routes */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout setToggleNav={setToggleNav} toggleNav={toggleNav} />
            }
          >
            {/* Home Page Route */}
            <Route
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />

            {/* About Page Route */}
            <Route
              path="/about"
              element={
                <Suspense fallback={<Spinner />}>
                  <About />
                </Suspense>
              }
            />

            {/* Services Page Route */}
            <Route
              path="/services"
              element={
                <Suspense fallback={<Spinner />}>
                  <Services />
                </Suspense>
              }
            />

            {/* Projects Listing Page Route */}
            <Route
              path="/projects"
              element={
                <Suspense fallback={<Spinner />}>
                  <Projects />
                </Suspense>
              }
            />

            {/* Contact Us Page Route */}
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Spinner />}>
                  <ContactUs />
                </Suspense>
              }
            />

            {/* Single Project Details Page with dynamic ID */}
            <Route
              path="/project/:id"
              element={
                <Suspense fallback={<Spinner />}>
                  <Project />
                </Suspense>
              }
            />
          </Route>
          {/* dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* enquery page of dahboard */}
            <Route
              path=""
              element={
                <Suspense fallback={<Spinner />}>
                  <Enquiries />
                </Suspense>
              }
            />
            <Route
              path="analytics"
              element={
                <Suspense fallback={<Spinner />}>
                  <Analytics />
                </Suspense>
              }
            />
            <Route
              path="cms"
              element={
                <Suspense fallback={<Spinner />}>
                  <CMS />
                </Suspense>
              }
            />
          </Route>
          {/* login page for admin */}
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          {/* Catch-all route for any unmatched paths (404 Page) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
