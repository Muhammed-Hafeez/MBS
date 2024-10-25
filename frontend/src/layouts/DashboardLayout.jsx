import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Dashboard/components/Header";
import { Icon } from "@iconify/react";
import { isLoggedIn } from "../services/auth";

const DashboardLayout = () => {
  const [nav, setNav] = React.useState("-100vw");
  const navigate = useNavigate();
  useEffect(() => {
    async function isLogged() {
      const response = await isLoggedIn();
      if (!response) {
        return navigate("/unauthorized");
      }
    }
    isLogged();
  }, []);

  return (
    <div className="Dashboard">
      <Header nav={nav} setNav={setNav} />
      <main>
        <Icon
          icon={"jam:menu"}
          className="jam-menu"
          width={"50px"}
          onClick={() => {
            setNav(nav === "-100vw" ? "0px" : "-100vw");
          }}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
