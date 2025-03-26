import "./Profile.css";
import ProfileImg from "./profile_image.jpg";
import emailjs from "emailjs-com";
import { useEffect } from "react";

function Profile() {
  useEffect(() => {
    getLocation();
  }, []);

  let lati = "",
    longi = "";

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      lati = "Not Supported";
      longi = "Not Supported";
    }
  }

  function showPosition(position) {
    lati = position.coords.latitude;
    longi = position.coords.longitude;
    document.getElementById("lati").value = lati;
    document.getElementById("longi").value = longi;
    console.log(lati, longi);
  }

  function clickHandle(e) {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1pzH1maEJNInRs58ddGwTu53z5xdJyrZZ/view?usp=sharing"
    );
    emailjs.sendForm(
      "service_clf9vk9",
      "template_uqt10dn",
      e.target,
      "n9K4-DTMTio0S7b7e"
    );
  }

  return (
    <div className="profile" id="profileSummary">
      {/* <div className="profileImage">
        <img src={ProfileImg} alt="Rashmi's Image"></img>
      </div> */}
      <div className="profileTable" id="box">
        <h1 align="center">Profile Summary</h1>
        <p align="center">
          Frontend developer with 5+ years of experience and a strong
          problem-solving skillset currently working for Capgemini Engineering.
          Expertise in React.js, Redux, TypeScript, JavaScript (ES6+), HTML,
          CSS/SASS, and modern web frameworks. Specializes in developing
          scalable and user-centric applications, prioritizing performance,
          accessibility, and security. Solid understanding of Micro Frontend
          architecture, CI/CD tools, and Agile methodologies. Well-equipped to
          contribute to any development team.
        </p>
        <form onSubmit={clickHandle}>
          <input id="lati" name="latitude"></input>
          <input id="longi" name="longitude"></input>
          <button>Download CV</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
