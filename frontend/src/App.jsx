import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useState } from "react";
import ScrollToTop from "./utils/scrollTop.js";
import Spinner from "./components/Spinner.jsx";
import {Error, NotFoundPage, Unauthorized} from "./pages/ErrorPages.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Alert from "./components/common/Alert.jsx";
import { useSelector, useDispatch } from "react-redux";
import { alertIsCalled } from "./features/counter.js";

// Lazy load the pages to improve initial load time
const Project = React.lazy(() => import("./pages/Project.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Home = React.lazy(() => import("./pages/Home.jsx"));
const ContactUs = React.lazy(() => import("./pages/ContactUs.jsx"));
const Projects = React.lazy(() => import("./pages/Projects.jsx"));
const Services = React.lazy(() => import("./pages/Services.jsx"));
const Enquiries = React.lazy(() => import("./Dashboard/pages/Enquiries.jsx"));
const Analytics = React.lazy(() => import("./Dashboard/pages/Analytics.jsx"));
const CMS = React.lazy(() => import("./Dashboard/pages/CMS.jsx"));
const Login = React.lazy(() => import("./Dashboard/pages/Login.jsx"));

function App() {
  const dispatch = useDispatch();
  const renderAlert = useSelector((state) => state.renderAlert);
  // State to manage the visibility of the side navigation
  const [toggleNav, setToggleNav] = useState("100vw");

  const handleClose = () => {
    dispatch(alertIsCalled({called:false}));
  };
  // dispatch(alertIsCalled(true));
  return (
    <div className="App">
      {renderAlert.called && (
        <Alert
          message={renderAlert.message}
          type={renderAlert.type} // success, error, info, warning
          onClose={handleClose}
        />
      )}
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
              index
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
          <Route path="/error" element={<Error />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
