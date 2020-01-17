import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import KyleCirclePhoto from "./KyleCirclePhoto.jpg"

class Navbar extends React.Component {

    
    render(){
        return (
            <div className="Navbar">
                <h1 id="NavBarName">Kyle Conlon</h1>
                <img className="ui small circular image" src={KyleCirclePhoto}/>
                <div style={{marginLeft: "1vw", marginRight: "1vw", marginTop: "2.2vh", marginBottom: "2vh"}}>
                    <span style={{color: "white", fontSize: 17, lineHeight: "2.5vh"}}>
                        Hi, my name is Kyle Conlon and I'm a fullstack software engineer. Welcome to my personal website!
                    </span>
                </div>
                <Link to="/" style={navStyle} > 
                    <p>Home</p>
                </Link>
                <Link to="/aboutme" style={navStyle}>
                    <p>About Me</p>
                </Link>
                <Link to="/projects" style={navStyle}>
                    <p>Projects</p>
                </Link>
            </div>
        );
    }
}

const navStyle = {
    color: "white"
}

export default Navbar;