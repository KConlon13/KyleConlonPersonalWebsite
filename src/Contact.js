import React from 'react';
import './App.css';

class Contact extends React.Component {

  render(){
    return (
      <div>
        <div class="Contact-Grey-Box">

          <h1 style={{fontSize: "31px", marginBottom: "1.2vh"}}>Contact</h1>

            <div style={{alignItems: "center" , marginLeft: "5vw", marginRight: "5vw"}}>
              <h4 style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, lineHeight: "3.3vh", display: "inline"}}>Interested in hiring me for your company or just want to say hi?   You can explore the contact info below or send an email to </h4>
              <a href="mailto:KyleConlon13@gmail.com" target="_blank" rel="noopener noreferrer" style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, lineHeight: "3.3vh", display: "inline", color: "rgb(15, 165, 157)"}}>KyleConlon13@gmail.com</a>
              <h4 style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, lineHeight: "3.3vh", display: "inline"}}>.   Feel free to connect on any social links below as well.</h4>
            </div>

            <div style={{marginBottom: "1vh", marginTop: "2.5vh"}}>
              <a href="https://www.linkedin.com/in/devkyleconlon/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in fa-2x" style={{margin: "2vh"}}></i>
              </a>
              <a href="https://github.com/KConlon13" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-2x" style={{margin: "2vh"}}></i>
              </a>
              <a href="https://www.instagram.com/keylaykeylaykeylay/?hl=en" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram fa-2x" style={{color: "rgb(15, 165, 157)", margin: "2vh"}}></i>
              </a>
              <a href="https://medium.com/@kyleconlon13" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium-m fa-2x" style={{margin: "2vh"}}></i>
              </a>
            </div>  
        </div>

        {/* Beginning of Contact Info Section */}

        <div class="mainContactShowContainer">
          <div class="contactCard">
            <button class="massive ui circular icon button" style={{background: "rgb(15, 165, 157)", pointerEvents: "none", height: "100px", width: "100px" }}>
              <i class="fas fa-map-marker-alt fa-2x" style={{color: "white"}}></i>
            </button>
            <h3 class="contactCardHeader">Location</h3>
            <h3 class="contactCardBody">Valley Stream, New York</h3>
            <h3 class="contactCardBodySub">Just a 50 minute LIRR commute from Penn Station and I own a car if vehicle transporation is needed</h3>
          </div>

          <div class="contactCard">
            <button class="massive ui circular icon button" style={{background: "rgb(15, 165, 157)", pointerEvents: "none", height: "100px", width: "100px" }}>
              <i class="fas fa-phone-alt fa-2x" style={{color: "white"}}></i>
            </button>
            <h3 class="contactCardHeader">Phone</h3>
            <h3 class="contactCardBody">(516) 640-9350</h3>
            <h3 class="contactCardBodySub">Available for phone conversations/ interviews Monday-Friday between the hours of 9am and 6pm</h3>
          </div>

          <div class="contactCard">
            <button class="massive ui circular icon button" style={{background: "rgb(15, 165, 157)", pointerEvents: "none", height: "100px", width: "100px" }}>
              <i class="fas fa-envelope fa-2x" style={{color: "white", paddingLeft: "6.5px"}}></i>
            </button>
            <h3 class="contactCardHeader">E-mail</h3>
            <h3 class="contactCardBody">KyleConlon13@gmail.com</h3>
            <h3 class="contactCardBodySub">Any inquiries regarding work or interviews can be sent to this email and will be responded to immediately</h3>
          </div>
        </div>
        {/* End of Contact Info Section */}

      </div>
    );
  }
}

export default Contact;