import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    render(){
        return (
            <div className="Navbar">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/aboutme">
                    <p>About Me</p>
                </Link>
                <Link to="/projects">
                    <p>Projects</p>
                </Link>
            </div>
        );
    }
}

export default Navbar;