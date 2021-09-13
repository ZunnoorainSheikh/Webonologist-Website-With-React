import React from "react";
import "./clientbox.css";
function Clientbox(props) {
  return <>
      <div className="col-md-2 text-center text-secondary my-5">
        <img src={props.imgsrc} alt="img1" />
      </div>
  </>;
}

export default Clientbox;
