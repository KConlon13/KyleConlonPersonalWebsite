import React from 'react';
import './App.css';

class Projects extends React.Component {

  render(){
    return (
        <div>
          <div class="PortfolioGrayHeaderBox">
            <h1 style={{fontSize: "31px", marginBottom: "1.2vh"}}>Portfolio</h1>
            <h4 style={{fontSize: "16px", fontWeight: "100", marginTop: 0, paddingTop: 0, paddingLeft: "10.5vw", paddingRight: "10.5vw", lineHeight: "3.3vh", display: "block", marginBottom: "2vh"}}>Welcome to my online portfolio. Feel free to look through my most recent projects, view their demo videos on YouTube, or examine my code on Github. </h4>
            <div>
              <a href="mailto:KyleConlon13@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button class="ui button" style={{background: "rgb(15, 165, 157)", color: "white"}}>
                      <i class="fas fa-paper-plane" style={{display: "inline"}}></i>
                      <h3 style={{display: "inline", marginLeft: "1vw", fontSize: "15px"}}>Hire Me</h3>
                  </button>
              </a>
            </div>

          </div>  
            <h5>Projects Here</h5>
        </div>
    );
  }
}

export default Projects;