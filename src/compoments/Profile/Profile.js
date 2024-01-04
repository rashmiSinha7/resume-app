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
    console.log("hi");
    window.open(
      "https://drive.google.com/file/d/1RlB7Fz_a7GW5cxpWpmLiT5a3L7xPcejh/view?usp=sharing"
    );
    emailjs.sendForm(
      "service_clf9vk9",
      "template_uqt10dn",
      e.target,
      "xVpqoGxI0NUNhhgR_"
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
          Passionate Frontend developer with 4+ years of experience with great
          problem-solving skills. Well experienced in React js, Redux, node js,
          Javascript, HTML and SASS, CSS. Worked in Micro frontend architecture
          and monolithic Applications. Used versioning platform such as GitLab,
          Bitbucket. Experienced in CICD tools and pipelines
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
