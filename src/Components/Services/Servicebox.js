import React from "react";
import "./service.css"

function Servicebox(props) {
  return (
    <>
      <div class="col-md-4 text-center text-secondary my-5">
        <img src={props.imgsrc} alt="service1" />
        <h3 className="my-4">{props.title}</h3>
        <p className="my-0">{props.desc}</p>
      </div>
    </>
  );
}

export default Servicebox;
