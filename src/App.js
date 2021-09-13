import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/Aboutus/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import OurService from "./Components/Services/OurService";
import Chatbot from "./Components/Services/Chatbot";
import Contactpage from "./Components/Contactus/Contactpage";
import Alert from "../src/Elements/Alert";
import "./app.css";

function App() {
  const [alert, setAlert] = useState("");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Switch>
          <Route path="/aboutus">
            <About title={"About Us"} />
          </Route>

          <Route path="/services">
            <OurService showAlert={showAlert}/>
          </Route>

          <Route path="/contactus">
            <Contactpage/>
          </Route>

          <Route path="/home">
            <HomePage showAlert={showAlert}/>
          </Route>
          <Route path="/">
            <HomePage showAlert={showAlert}/>
          </Route>
        </Switch>
      </Router>
      <Chatbot showAlert={showAlert} />
    </>
  );
}

export default App;
