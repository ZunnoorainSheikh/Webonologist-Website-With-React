import React from "react";
import "./header.css"
function Mainbody(props) {
  return (
    <>
      <div className="container my-5" id="main-body-home">
        <div className="row">
          <div className="col">
            <div className="jumbotron">
              <h1 className="display-4 text-secondary ">{props.heading}</h1>
              <p className="lead text-justify">
                {props.description}
              </p>
              <hr className="my-4" />
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">
                  See More...
                </a>
              </p>
            </div>
          </div>
          <div className="col">
              <img src={props.imgsrc} alt="img-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainbody;
