import React from 'react';
import "./footer.css";
import github from"../../assets/github.png";
import instgram from"../../assets/instagram.png";
import linkedin from"../../assets/linkedin.png";
import logo from"../../assets/logo.png";


const Footer = () => {
  return (
    <div className='Footer-container'>

      <hr/>
      <div className='footer'>
        <div className='social-links'>
<img src={github}alt=''/>
<img src={instgram}alt=''/>
<img src={linkedin}alt=''/>

        </div>
        <div className='logo-f'>
            <img src={logo}alt=''/>
        </div>
      </div>
      <div className="blur footer-blur"></div>
      <div className="blur footer-blur2"></div>

    </div>
  )
}

export default Footer
