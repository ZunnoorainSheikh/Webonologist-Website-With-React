import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Navbar(props) {
  

  return (
    <>
      <nav
        id="navbar_top"
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Webonologist
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          
        </div>
      </nav>

      {/* {bootstrapFixed()} */}
    </>
  );
}

export default Navbar;
