import React from "react";
import { Link } from "react-router-dom";
import "../../Components/style.css";

function Copyright(props) {
  let year = new Date();
  year = year.getUTCFullYear();
  return (
    <>
      <div id="footer-main">
        <div className="my-5 footer-top">
          <div className="bg-dark text-center text-white">
            <section className="bg-light text-center text-black ">
              <form action="" className="">
              <hr className="style-four" />
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our Latest Update</strong>
                    </p>
                  </div>

                  <div className="col-md-5 col-12">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary mb-4">Subscribe</button>
                  </div>
                </div>
              </form>
            </section>

            <div className="text-center footer-down">
              © {year} Copyright :
              <Link className="text-white my-3" to="/">
                {props.companyName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Copyright;
