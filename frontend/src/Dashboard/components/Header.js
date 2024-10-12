import React from "react";
import logo from "../../assets/logo.jpeg";
import { NavLink , useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { logout } from "../../services/auth";
import { useDispatch } from "react-redux";
import { alertIsCalled } from "../../features/counter";

function Header({ nav, setNav }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="DashboardHeader" style={{ left: `${nav}` }}>
      <nav>
        <ul className="list">
          <li className="dashboard-logo">
            <img src={logo} alt="MBS" />
          </li>
          <li
            className="link d-close"
            onClick={() => {
              setNav("-100vw");
            }}
          >
            <Icon
              icon={"ic:round-arrow-back"}
              className="icon"
              width={"30px"}
            />
          </li>
          <li className="link">
            <NavLink
              to={"/dashboard"}
              end
              className={({ isActive }) =>
                isActive ? "dasboardLinkActive" : ""
              }
            >
              <Icon icon={"mdi:leads"} className="icon" width={"30px"}></Icon>
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to={"/dashboard/analytics"}
              className={({ isActive }) =>
                isActive ? "dasboardLinkActive" : ""
              }
            >
              <Icon
                icon={"oui:ws-analytics"}
                className="icon"
                width={"30px"}
              ></Icon>
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to={"/dashboard/CMS"}
              className={({ isActive }) =>
                isActive ? "dasboardLinkActive" : ""
              }
            >
              <Icon
                icon={"carbon:gui-management"}
                className="icon"
                width={"30px"}
              ></Icon>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to={"/Login"}>
              <Icon
                icon={"material-symbols:login-sharp"}
                className="icon"
                width={"30px"}
              ></Icon>
            </NavLink>
          </li>
          <li className="link">
            <Icon
              icon="bx:power-off"
              className="icon"
              width={"30px"}
              onClick={async () => {
                const result = await logout();
                if (result.success === true) {
                  dispatch(
                    alertIsCalled({
                      called: true,
                      message: result.message,
                      type: "success",
                    })
                  );
                  return navigate("/");
                }
                dispatch(
                  alertIsCalled({
                    called: true,
                    message: result.message,
                    type: "error",
                  })
                );
                  return navigate("/");
              }}
            ></Icon>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
