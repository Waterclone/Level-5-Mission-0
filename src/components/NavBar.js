import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../images/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-2" style={{ width: "100%", backgroundColor: `rgba(255, 255, 255, 0.95)`, boxShadow: "3px 3px 10px #e18ed4", position: "fixed", top: "0", zIndex: "999" }}>
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <img width="40" src={Logo} alt="Logo" />
            <a className="navbar-brand px-2" style={{ fontFamily: "Borel", fontSize: "26px", color: "#e18ed4", position: "relative", top: "7px" }} href="#">
              The Icecream Truck
            </a>
          </div>
          <button
            className="navbar-toggler"
            style={{ borderColor: "#e18ed4", outline: "none" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item px-4">
                <a className="nav-link" style={{ fontSize: "16px", fontWeight: "600", color: "#e18ed4" }} aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" style={{ fontSize: "16px", fontWeight: "600", color: "#e18ed4" }} href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" style={{ fontSize: "16px", fontWeight: "600", color: "#e18ed4" }} href="#">
                  STORE
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn px-4 py-1 login-button" type="submit">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
