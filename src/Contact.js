import React from 'react';
import './App.css';

class Contact extends React.Component {

  render(){
    return (
      <div>
        <div class="GrayHeaderBox">

          <h1 style={{fontSize: "31px", marginBottom: "1.2vh"}}>Contact</h1>

            <div style={{alignItems: "center"}}>
              <h4 style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, paddingLeft: "10.5vw", paddingRight: "10.5vw", lineHeight: "3.3vh", display: "inline"}}>Interested in hiring me for your company or just want to say hi?   You can explore the contact info below or send an email to </h4>
              <a href="mailto:KyleConlon13@gmail.com" target="_blank" rel="noopener noreferrer" style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, lineHeight: "3.3vh", display: "inline", paddingLeft: "10.5vw", color: "rgb(15, 165, 157)"}}>KyleConlon13@gmail.com</a>
              <h4 style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, paddingRight: "10.5vw", lineHeight: "3.3vh", display: "inline"}}>.   Feel free to connect on any social links below as well.</h4>
            </div>

            <div style={{marginBottom: "1vh", marginTop: "2.5vh"}}>
              <a href="https://www.linkedin.com/in/devkyleconlon/" target="_blank" rel="noopener noreferrer">
                {/* <button class="ui circular linkedin icon button"> */}
                    <i class="fab fa-linkedin-in fa-2x" style={{margin: "2vh"}}></i>
                {/* </button> */}
              </a>
              <a href="https://github.com/KConlon13" target="_blank" rel="noopener noreferrer">
                {/* <button class="ui circular github icon button"> */}
                    <i class="fab fa-github fa-2x" style={{margin: "2vh"}}></i>
                {/* </button> */}
              </a>
              <a href="https://www.instagram.com/keylaykeylaykeylay/?hl=en" target="_blank" rel="noopener noreferrer">
                {/* <button class="ui circular github icon button"> */}
                    <i class="fab fa-instagram fa-2x" style={{color: "rgb(15, 165, 157)", margin: "2vh"}}></i>
                {/* </button> */}
              </a>
              <a href="https://medium.com/@kyleconlon13" target="_blank" rel="noopener noreferrer">
                {/* <button class="ui circular medium icon button"> */}
                    <i class="fab fa-medium-m fa-2x" style={{margin: "2vh"}}></i>
                {/* </button> */}
              </a>
            </div>  


        </div>

        <div className="ContactMainBox">
          <h1 id="ContactTitle">GET IN TOUCH</h1>
          <h1 id="ContactDividerLine">____</h1>
          <div id="ContactContentBox">
            <div>
              <i class="fas fa-envelope"></i>
              <h3 class="emailContact" >KyleConlon13@gmail.com</h3>
              <a href="mailto:KyleConlon13@gmail.com" target="_blank" rel="noopener noreferrer" class="emailHyperlink">(Click Here)</a>
            </div>

            <div class="contactLineDivider">
              <i class="fas fa-phone"></i>
              <h3 class="phoneContact" >516-640-9350</h3>
            </div>

            <div class="contactLineDivider">
              <a href="https://www.linkedin.com/in/devkyleconlon/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
                <h3 class="phoneContact" >linkedin.com/in/devkyleconlon/</h3>
              </a>
            </div>

            <div class="contactLineDivider">
              <a href="https://github.com/KConlon13" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github-square"></i>
                <h3 class="phoneContact" >github.com/KConlon13</h3>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;