import React from "react";
import Topheading from "../Aboutus/Topheading";
import Servicebox from "./Servicebox";

function ServiceItems() {
  return (
    <>
    <Topheading title="Our Services" desc="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."/>


      <div class="container" id="service-boxes">
        <div class="row">

          <Servicebox 
          imgsrc="https://cdn-icons-png.flaticon.com/512/888/888991.png"
          title="Web Development"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
          />
          <Servicebox 
          imgsrc="https://cdn-icons-png.flaticon.com/512/45/45082.png"
          title="React Development"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
          />
          <Servicebox 
          imgsrc="https://cdn-icons-png.flaticon.com/512/977/977597.png"
          title="WordPress"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
          />
          <Servicebox 
          imgsrc="https://cdn-icons-png.flaticon.com/512/841/841568.png"
          title="Front End Web Development"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
          />
          <Servicebox 
          imgsrc="https://cdn-icons-png.flaticon.com/512/4516/4516990.png"
          title="Back-end Development"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
          />
          <Servicebox 
          imgsrc="https://cdn-icons-png.flaticon.com/512/2432/2432582.png"
          title="Game Development"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
          />

        </div>
      </div>
    </>
  );
}

export default ServiceItems;
