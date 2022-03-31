import "./Profile.css";
import ProfileImg from "./profile_image.jpg";

function Profile() {
  return (
    <div className= "profile" id="profileSummary">
      <div className="profileImage">
        <img src={ProfileImg} alt="Rashmi's Image"></img>
        
        </div>
      <div className="profileTable" id="box">
        <h1 align= "center">Profile Summary</h1>
        <p align="center" >
          IT Professional with 2.4 years of experience in front end development,
          looking for a job opportunity in a competitive environment that will
          challenge me to push my boundaries and expand my knowledge in the
          field of computer science while allowing me to add value to the
          dynamics of the company
        </p>
        <a href="https://drive.google.com/file/d/1RlB7Fz_a7GW5cxpWpmLiT5a3L7xPcejh/view?usp=sharing" target="_blank">
        <button >Download CV</button>
        </a>
        
       
      </div>
      
    </div>
      

  );
}

export default Profile;
