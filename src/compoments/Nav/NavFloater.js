import "./Nav.css";



function NavFloater(){


    return(
        
        <div id="stickyNav" className="header2">
        <div className="rightSide">
        <div className="links" >
          <a href="#profileSummary">About</a>
          <a href="#skillHeader">Skills</a>
          <a href="#projectHeader">Projects</a>
          {/* <a href="#educationHeader">Education</a> */}
          <a href="#contactMe">Contact Me</a>
        </div>
      
      </div>
      </div>
    )
}
export default NavFloater;