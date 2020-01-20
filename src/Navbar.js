import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import KyleCirclePhoto from "./KyleCirclePhoto.jpg"

class Navbar extends React.Component {

    state={
        aboutClicked: true,
        contactClicked: false,
        resumeClicked: false,
        projectsClicked: false
      }

    aboutClickHandler=()=>{
        this.setState({aboutClicked: true, contactClicked: false, resumeClicked: false, projectsClicked: false})
    }
    contactClickHandler=()=>{
        this.setState({aboutClicked: false, contactClicked: true, resumeClicked: false, projectsClicked: false})
    }
    resumeClickHandler=()=>{
        this.setState({aboutClicked: false, contactClicked: false, resumeClicked: true, projectsClicked: false})
    }
    projectsClickHandler=()=>{
        this.setState({aboutClicked: false, contactClicked: false, resumeClicked: false, projectsClicked: true})
    }

    render(){
        return (
            <div className="Navbar">
                <h1 id="NavBarName">Kyle Conlon</h1>
                <img className="ui small circular image" src={KyleCirclePhoto} alt="Kyle Circle"/>
                <div style={{marginLeft: "1vw", marginRight: "1vw", marginTop: "3vh", marginBottom: "2vh"}}>
                    <span style={{color: "white", fontSize: 13, lineHeight: "2.5vh"}}>
                        Hi, my name is Kyle Conlon and I'm a fullstack software engineer. Welcome to my personal website!
                    </span>
                </div>
                <div style={{marginBottom: "1vh", marginTop: "2.5vh"}}>
                    <a href="https://www.linkedin.com/in/devkyleconlon/" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular linkedin icon button">
                            <i class="fab fa-linkedin-in"></i>
                        </button>
                    </a>
                    <a href="https://github.com/KConlon13" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular github icon button">
                            <i class="fab fa-github"></i>
                        </button>
                    </a>
                    <a href="https://medium.com/@kyleconlon13" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular medium icon button">
                            <i class="fab fa-medium-m"></i>
                        </button>
                    </a>
                </div>

                <div class="ui divider"></div>

                <Link to="/" style={navStyle}>

                    { this.state.aboutClicked === true ? 
                    <div style={{margin: "auto", marginBottom: "1.6vh", marginTop: "3vh", color: "black"}} onClick={()=>this.aboutClickHandler()}>
                        <i class="fas fa-user" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "black"}}>About Me</h3>
                    </div> :
                    <div style={{margin: "auto", marginBottom: "1.6vh", marginTop: "3vh"}} onClick={()=>this.aboutClickHandler()}>
                        <i class="fas fa-user" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "white"}}>About Me</h3>
                    </div> }   

                </Link>
                <Link to="/portfolio" style={navStyle}>

                    { this.state.projectsClicked === true ? 
                        <div style={{margin: "auto", marginBottom: "1.6vh", color: "black"}} onClick={()=>this.projectsClickHandler()}>
                        <i class="fas fa-laptop-code" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "black"}}>Portfolio</h3>
                        </div> :
                        <div style={{margin: "auto", marginBottom: "1.6vh"}} onClick={()=>this.projectsClickHandler()}>
                        <i class="fas fa-laptop-code" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "white"}}>Portfolio</h3>
                        </div> }

                </Link>
                <Link to="/resume" style={navStyle} > 

                { this.state.resumeClicked === true ? 
                        <div style={{margin: "auto", marginBottom: "1.6vh", color: "black"}} onClick={()=>this.resumeClickHandler()}>
                        <i class="fas fa-file" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "black"}}>Resume</h3>
                        </div> :
                        <div style={{margin: "auto", marginBottom: "1.6vh"}} onClick={()=>this.resumeClickHandler()}>
                        <i class="fas fa-file" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "white"}}>Resume</h3>
                        </div> }

                </Link>
                <Link to="/contact" style={navStyle} > 

                    { this.state.contactClicked === true ? 
                        <div style={{margin: "auto", marginBottom: "3vh", color: "black"}} onClick={()=>this.contactClickHandler()}>
                        <i class="fas fa-envelope-open-text" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "black"}}>Contact</h3>
                        </div> :
                        <div style={{margin: "auto", marginBottom: "3vh"}} onClick={()=>this.contactClickHandler()}>
                        <i class="fas fa-envelope-open-text" style={{display: "inline", marginRight: "9px"}}></i>
                        <h3 class="ui header" style={{display: "inline", color: "white"}}>Contact</h3>
                        </div> }
                        
                </Link>

                <div class="ui divider"></div>

                <div>
                    <a href="mailto:KyleConlon13@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button class="ui button" style={{background: "rgba(31, 32, 32, 0.350)", color: "white"}}>
                            <i class="fas fa-paper-plane" style={{display: "inline"}}></i>
                            <h3 style={{display: "inline", marginLeft: "1vw", fontSize: "15px"}}>Hire Me</h3>
                        </button>
                    </a>
                </div>

            </div>
        );
    }
}

const navStyle = {
    color: "white"
}

export default Navbar;