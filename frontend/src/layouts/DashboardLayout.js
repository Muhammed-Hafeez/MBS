import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Dashboard/components/Header";
import { Icon } from "@iconify/react";

const DashboardLayout = () => {
  const [nav, setNav] = React.useState("-100vw");
  return (
    <div className="Dashboard" >
      <Header nav={nav} setNav={setNav} />
      <main>
        <Icon
          icon={"jam:menu"}
          className="jam-menu"
          width={"50px"}
          onClick={() => {
            setNav(nav === "-100vw" ? "0px" : "-100vw");
            console.log(nav);
          }}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
