import React, { useState } from "react";
import { render } from "react-dom";
import instaImg from "./instagram.png";
import fbImg from "./facebook.png";
import lnkdImg from "./linkedin.png";
import emailjs from "emailjs-com";

import "./contact.css";

function Contact() {

  let [emailValidationResult,setEmail]=useState("");

  
  function sendEmail(e) {
    e.preventDefault();
    console.log("hi");
    emailjs
      .sendForm(
        "service_clf9vk9",
        "template_ikzbfqz",
        e.target,
        "xVpqoGxI0NUNhhgR_"
      )
      .then((res) => {
        if (res.text == "OK") alert("Email Sent Successfully!");
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }

  function emailValidation(e){

    
    if(e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
      console.log(e.target.value);
    setEmail(emailValidationResult="Correct");
    }
    else{
      setEmail(emailValidationResult="Input Correct Email!");
     
    }

  }

  return (
    <div className="contactPage" id="contactMe" align="center">
      <div className="contactData">
        <h1 className="hire" align="center">
          Hire Me.
        </h1>
        <p className="hireText">
          I am available for full time/ part time/ freelance work. Connect with
          me via :
        </p>
        <p className="hireText">
          Phone:
          <strong> +919348339935</strong> or email:
          <strong>rashmi.sinha1st@gmail.com </strong>
          or LinkedIn: <strong>linkedin.com/in/rashmisinha7/ </strong> 
        </p>
        <br></br>
        <a href="https://www.instagram.com/rashmi_sinha7/" target="_blank">
          <img src={instaImg} alt="my insta handle"></img>
        </a>
        <a href="https://www.facebook.com/raarshmee" target="_blank">
          <img src={fbImg} alt="my fb handle"></img>
        </a>
        <a href="https://www.linkedin.com/in/rashmisinha7/" target="_blank">
          <img src={lnkdImg} alt="my linkedin handle"></img>
        </a>
      </div>
      <div>
        <form className="contactBox" align="center" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="contactName"
            placeholder="Your name *"
            style={{paddingLeft:"1.5%"}}
          />
          <input
            name="user_email"
            type="text"
            className="contactEmail"
            placeholder="Your Email *"
            onChange={emailValidation}
            style={{paddingLeft:"1.5%"}}
          />
          <p >{emailValidationResult}</p>
          <input
            name="subject"
            type="text"
            className="contactSubject"
            placeholder="Write a Subject"
            style={{paddingLeft:"1.5%"}}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Write Your message"
            style={{paddingLeft:"1.5%"}}
          ></textarea>
          <button type="submit" id="contactButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
