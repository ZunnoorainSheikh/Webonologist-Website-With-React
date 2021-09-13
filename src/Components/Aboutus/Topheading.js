import React from "react";
import "../../Components/style.css";

function Topheading(props) {
  return (
    <>
      <div className="heading my-3">
        <h1 className="text-secondary text-center">{props.title}</h1>
        <p className="text-secondary text-center">
          {props.desc}
        </p>
        <hr className="container"></hr>
      </div>
    </>
  );
}

export default Topheading;
