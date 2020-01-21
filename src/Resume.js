import React from 'react';
import './App.css';
import ResumeImage from "./ResumeImage.png"

class Resume extends React.Component {

  render(){
    return (
        <div className="Resume">
            <img src={ResumeImage} 
            alt="Kyle's Resume" 
            id="ResumePNG"/>
        </div>
    );
  }
}

export default Resume;