import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
      <header>
        <div
          className="p-5 text-center bg-image "
        >
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 ">{props.title}</h1>
                <h5 className="mb-3 text-desc">{props.titledesc}</h5>
                <Link
                  className="btn btn-outline-light btn-lg "
                  to="/contactus"
                  role="button"
                >
                  Conact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
