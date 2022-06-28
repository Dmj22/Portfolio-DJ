import React from 'react';
import gitHub from "../../assets/contact-icons/githublogo.png";
import gmail from "../../assets/contact-icons/gmaillogo.png";
import linkedin from "../../assets/contact-icons/linkedinlogo.png";

function Footer () {

    return (
        <div className='footer' style={{textAlign: 'center'}}>
           <div> 
           <a href="https://github.com/Dmj22">
          <img
            src={gitHub}
            alt="GitHub"
            className="icons"
          />
        </a>
        <a href="mailto:daquan.jordan22@gmail.io">
          <img
            src={gmail}
            alt="Gmail"
            className="icons"
          />
        </a>
        <a href="https://www.linkedin.com/in/djordan22/">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icons"
          />
        </a>
           </div>
         </div>
       );
     }

export default Footer;