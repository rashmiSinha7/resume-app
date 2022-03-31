import React from 'react';
import instaImg from "../Contact/instagram.png";
import fbImg from "../Contact/facebook.png";
import lnkdImg from "../Contact/linkedin.png";
import './footer.css';

function Footer(){
    return(
      
        <div className='footer'>
            <div className='footerImg'>
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
           
            <div className='footerCR'><p>© Copyright @ 2022 Rashmi Sinha.</p></div>
            
        </div>
    );
}

export default Footer;