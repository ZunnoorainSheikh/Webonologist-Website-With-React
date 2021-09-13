import React from "react";
import Clientbox from "./Clientbox";
function Ourclients() {
  return (
    <>
      <div className="container my-5" id="ourclients">
          <hr />
          <h1 className="text-secondary text-center my-3">Our Clients</h1>
        <div className="row">

          <Clientbox 
          imgsrc="https://cdn-icons-png.flaticon.com/128/3698/3698156.png" 
          />
          <Clientbox 
          imgsrc="https://cdn-icons-png.flaticon.com/128/187/187879.png" 
          />
          <Clientbox 
          imgsrc="https://cdn-icons-png.flaticon.com/128/564/564419.png" 
          />
          <Clientbox 
          imgsrc="https://cdn-icons-png.flaticon.com/128/3940/3940066.png" 
          />
          <Clientbox 
          imgsrc="https://cdn-icons-png.flaticon.com/128/3800/3800024.png" 
          />
          <Clientbox 
          imgsrc="https://cdn-icons-png.flaticon.com/128/3387/3387987.png" 
          />

        </div>
      </div>
    </>
  );
}

export default Ourclients;
