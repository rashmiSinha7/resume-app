import React from "react";
import { render } from "react-dom";
import instaImg from "./instagram.png";
import fbImg from "./facebook.png";
import lnkdImg from "./linkedin.png";

import "./contact.css";

function Contact() {
  return (
    <div className="contactPage" id= "contactMe"align="center">
      
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
          or LinkedIn: <strong>linkedin.com/in/rashmisinha7/ </strong> <br />
        </p>
      
        <a href="https://www.instagram.com/rashmi_sinha7/" target="_blank">
          <img src={instaImg} alt="my insta handle"></img>
        </a>
        <a href="https://www.facebook.com/raarshmee" target="_blank">
          <img
            src={fbImg}
            alt="my fb handle"
           
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/rashmisinha7/" target="_blank">
          <img src={lnkdImg} alt="my linkedin handle"></img>
        </a>
     
      </div>
      <div className="contactBox" align="center">
        <input type="text" className="contactName" placeholder="Your name *" />
        <input
          type="text"
          className="contactEmail"
          placeholder="Your Email *"
        />
        <input
          type="text"
          className="contactSubject"
          placeholder="Write a Subject"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Write Your message"
        ></textarea>
        <button className="contactButton" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
