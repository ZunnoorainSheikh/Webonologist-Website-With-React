import React from "react";
import Topheading from "./Topheading";
import OurTeam from "./OurTeam";
import Companyinfo from "./Companyinfo";
import "../../Components/style.css";
import Footer from "../Footerus/Footer";

function About(props) {
  return (
    <>
      <Topheading
        title={"About Us"}
        desc="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
      />
      <Companyinfo />
      <OurTeam />
      <Footer />
    </>
  );
}

export default About;
