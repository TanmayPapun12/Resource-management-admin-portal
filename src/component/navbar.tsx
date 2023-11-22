import React from "react";
import logo from "../assets/logo.png";
import person from "../assets/image.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          {" "}
          <div className="me-auto"></div>
          <button className="btn btn-success me-2" type="submit">
            Add item
          </button>
          <img src={person} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
