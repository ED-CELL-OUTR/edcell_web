import { useState } from "react";
import { Link } from "react-router-dom";
// import Events from "./../events/event.js";

import "./../../components/landing/navbar.css";
import logo from "./../../img/logo.png";

const Navbar = () => {
  const [sidenavWidth, setSidenavWidth] = useState("0px");

  const openNav = () => {
    setSidenavWidth("250px");
  };

  const closeNav = () => {
    setSidenavWidth("0px");
  };

  return (
    <div className="landing-nav">
      <div className="logo">
        <img src={logo} alt="" style={{ height: "8rem" }} />
      </div>
      <div className="menu-icon">
        <button
          style={{ fontSize: "25px", cursor: "pointer" }}
          onClick={openNav}
        >
          <span style={{ color: "black" }}>Menu</span>&#9776;
        </button>
        <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
          <button className="closebtn" onClick={closeNav}>
            &times;
          </button>
          <ul>
            <li>
              <Link to="/events" className="link">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
