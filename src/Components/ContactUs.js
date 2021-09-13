import React, { useState } from "react";
import Topheading from "./Aboutus/Topheading";

function ContactUs() {
  
  const handleOnchage = (event) => {
    let text1 = event.target.value;
    if (text1.length > 0) {
      setbtnDisable("btn btn-primary");
    } else {
      setbtnDisable("btn btn-primary disabled");
    }
  };

  

  

  const [btnDisable, setbtnDisable] = useState("btn btn-primary disabled");

  return (
    <>
      <Topheading
        title={"Contact Us"}
        desc="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, omnis."
      />
      <div className="container my-4">
        <div className="container">
          <form>
            <div className="form-group my-4">
              <label htmlFor="fullName">Your Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="XYZ"
                required
                onChange={handleOnchage}
              />
            </div>
            <div className="form-group  my-4">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="exampleFormControlTextarea1">Messsage</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                required
              ></textarea>
            </div>

            <div>
              <button
                className={`btn btn-primary
                ${btnDisable} `}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
