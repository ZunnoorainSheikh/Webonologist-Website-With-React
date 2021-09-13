import React, { useState } from "react";
import "./chatbot.css";
import $ from "jquery";

function Chatbot(props) {


  function handleDisplay() {
    var icon = document.getElementById("chat-body");
    if (icon.style.display === "none") {
      icon.style.display = "block";
    } else {
      // if(chatText.length===0 == chatText.length>0){
      //     icon.style.display="block";
      // }
      icon.style.display = "none";
    }
  }

  function handleInput(event) {
    let text = event.target.value;
    console.log(event.target.value);
    setchattext(text);
  }

  const enterButton = (event) => {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn-send").click();
    }
  };

  function btnChatroom() {
    if (chatText.length === 0) {
      props.showAlert("Enter Some Data", "danger");
    } else {
      $(`<div id="chat-message-line">
            <p className="text-secondary text-left mx-4 my-3 text-specific">${chatText}</p>
        </div>
        `).insertBefore(".message-corner");

      // document.getElementById('chatid').value="";
      setchattext("");
    }
  }

  window.setInterval(function() {
    var elem = document.getElementById('chat-body');
    elem.scrollTop = elem.scrollHeight;
  }, 5000);

  const [chatText, setchattext] = useState("");
  return (
    <>
      <div id="chatbot-main">
        <div id="chatbot-inner">
          <div
            className="chat-icon"
            id="chat-icon"
            onClick={handleDisplay}
          ></div>

          <div className="chatbody" id="chat-body">
            {/* box title */}
            <div className="box-title">
              <h5 className="text-secondary text-center my-4">
                Welcome to Service Center
              </h5>
            </div>

            {/* box corner */}
            <div id="chat-info">
            <div className="message-corner"></div>
            </div>

            {/* input box */}
            <div className="chat-msg">
              <div className="input-msg">
                <textarea
                  type="text"
                    rows='1'
                  value={chatText}
                  className="form-control"
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
      </div>
    </>
  );
}

export default Chatbot;
