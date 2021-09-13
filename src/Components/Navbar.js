import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Navbar(props) {
  function bootstrapFixed() {
     document.addEventListener("DOMContentLoaded", function () {
       window.addEventListener("scroll", function () {
         if (window.scrollY > 50) {
           document.getElementById("navbar_top").classList.add("fixed-top");
           // add padding top to show content behind navbar
           var navbar_height = document.querySelector(".navbar").offsetHeight;
           document.body.style.paddingTop = navbar_height + "px";
         } else {
           document.getElementById("navbar_top").classList.remove("fixed-top");
           // remove padding top from body
           document.body.style.paddingTop = "0";
         }
       });
     });
   }

  return (
    <>
      <nav
        id="navbar_top"
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="/home">
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

      {bootstrapFixed()}
    </>
  );
}

export default Navbar;
