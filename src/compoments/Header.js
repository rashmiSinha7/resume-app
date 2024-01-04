import React, { useState } from "react";
import "../App.css";
import ProfileImg from "./Profile/profile_image.jpg";
import ReorderIcon from "@material-ui/icons/Reorder";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="header">
        <div className="top">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="#profileSummary" style={{padding:"1%"}}>About</a>
            <a href="#skillHeader">Skills</a>
            <a href="#projectHeader">Projects</a>
            {/* <a href="#educationHeader">Education</a> */}
            <a href="#contactMe">Contact Me</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <ReorderIcon />
          </button>
        </div>
          <div className="bottom">
            <div className="text-bottom">
              <h1>
                Hello! <br />
                I'm Kumari Rashmi Sinha
              </h1>
              <h3>Front End Developer</h3>
            </div>
            <div className="img_bottom">
              <img src={ProfileImg} alt="Rashmi's Image"></img>
            </div> 
          </div>
      </div>
      <div className="wrapper">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Header;