import React, { useState } from "react";
import "./header.css";
import $ from "jquery";

function Servicechat() {
  function btnChatroom() {
    if (chatText.length === 0) {
      alert("Enter Something");
    } else {
      $(`<div id="chat-message-line">
            <p className="text-secondary text-left mx-4 my-3 text-specific">${chatText}</p>
        </div>
        `).insertBefore(".chat-msg");

      // document.getElementById('chatid').value="";
      setchattext("");
    }
  }

  function handleInput(event) {
    let text = event.target.value;
    console.log(event.target.value);
    setchattext(text);
  }

  /*
  function clickIcon() {
    var icon = document.getElementById("chatroom-box");
    if (icon.style.display === "none") {
      icon.style.display = "block";
    } else {
        // if(chatText.length===0 == chatText.length>0){
        //     icon.style.display="block";
        // }
     icon.style.display = "none";
    }
  }*/

  const enterButton = (event) => {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn-send").click();
    }
  };

  const [chatText, setchattext] = useState("");
  return (
    <>
      <div className="container-chatroom">
        <div className="chatroom-icon" id="iconc">
        </div>

        <div class="chatroom-box">
        <div className="box-title">
              <h5 className="text-secondary text-center my-4">
                Welcome to Service Center
              </h5>
            </div>
            <div className="message-corner"></div>
            <div className="chat-msg">
              <div className="input-msg">
                <input
                  type="text"
                  value={chatText}
                  class="form-control"
                  id="chatid"
                  placeholder="Enter Your Message"
                  onChange={handleInput}
                  autoComplete="off"
                  onKeyUp={enterButton}
                />
              </div>
              <div className="button-send">
                <button
                  className="btn btn-primary"
                  id="btn-send"
                  onClick={btnChatroom}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Servicechat;
