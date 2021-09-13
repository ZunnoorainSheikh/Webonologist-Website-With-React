import React from "react";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import About from "./Components/Aboutus/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import OurService from "./Components/Services/OurService";
import Chatbot from "./Components/Services/Chatbot";
import Contactpage from "./Components/Contactus/Contactpage";

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>

          <Route path="/aboutus">
            <About title={"About Us"}/>
          </Route>

          <Route path="/services">
            <OurService />
          </Route>


          <Route path="/contactus">
            <Contactpage />
          </Route>

        </Switch>
      </Router>
      <Chatbot />
    </>
  );
}

export default App;
