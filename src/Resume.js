import React from 'react';
import './App.css';
import ResumeImage from "./ResumeImage.png"

class Resume extends React.Component {

  render(){
    return (
        <div className="Resume">
          <div class="ResumeGrayHeaderBox">
            <h1 style={{fontSize: "31px", marginBottom: "2vh"}}>Online Resume</h1>

          <a href="https://drive.google.com/file/d/10mo1KIuPAXXVeWioiydJY6abmwzIU_hR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button class="ui button" style={{background: "rgb(15, 165, 157)", color: "white", width: "17vw"}}>
              <i class="fas fa-file-pdf fa-lg" style={{display: "inline", verticalAlign: "25%"}}></i>
              <h3 style={{display: "inline", marginLeft: "1vw", fontSize: "15px", verticalAlign: "25%"}}>Download PDF Version</h3>
            </button>
          </a>  
          
          </div>
            <img src={ResumeImage} 
            alt="Kyle's Resume" 
            id="ResumePNG"/>
        </div>
    );
  }
}

export default Resume;

// Need to activate button and PDF download capability