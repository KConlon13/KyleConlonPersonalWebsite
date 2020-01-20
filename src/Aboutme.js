import React from 'react';
import './App.css';
import KyleDrumming from "./KyleDrumming.jpg"
import { Link } from "react-router-dom";

class Aboutme extends React.Component {

  render(){
    return (
        <div className="Aboutme">
          {/* beginning of bio box on top */}
          <div className="BioBox">

            <div className="BioBoxTitle">
              <h1 class="ui header" style={{fontSize: "45px", marginBottom: 5, fontWeight: 900 }}>Kyle Conlon</h1>
              <h3 style={{margin: 0, paddingLeft: 1, fontSize: "19px", fontWeight: "lighter"}}>Fullstack Software Engineer</h3>
              <h5 style={{fontSize: "14.5px", paddingBottom: 5, fontWeight: 480, marginTop: 25}}>Software and music extraordinaire, Kyle Conlon had the most humble beginnings when it came to code. Spending hours upon hours on Codecadamy while in a van touring the country with a band was a great start, but he craved something more. That's when he discovered Flatiron School's Immersive Software Engineering Bootcamp, which helped him propel his coding skills to even greater heights! He is now able to craft beautifully elaborate websites and iOS apps using his mere mortal hands, something he'd never thought possible. And so his adventure continues! Where shall it take him next?</h5>
              <Link to="/portfolio">
                <button class="ui button" style={{background: "rgb(15, 165, 157)", color: "white", marginRight: "0.7vw"}}>
                  <i class="fas fa-arrow-circle-right" style={{display: "inline"}}></i>
                  <h3 style={{display: "inline", marginLeft: "1vw", fontSize: "15px"}}>View Portfolio</h3>
                </button>
              </Link>
              <Link to="/resume">
                <button class="ui button" style={{background: "rgb(93, 98, 101)", color: "white"}}>
                  <i class="fas fa-arrow-circle-right" style={{display: "inline"}}></i>
                  <h3 style={{display: "inline", marginLeft: "1vw", fontSize: "15px"}}>View Resume</h3>
                </button>
              </Link>
            </div>

            <div className="BioBoxImage">
              <img className="ui medium rounded image" src={KyleDrumming} alt="Kyle Drumming" 
              style={{minHeight: 260, minWidth: 480, marginRight: "5vh"}}/>
            </div>
          </div>
          {/* End of Bio Box on Top */}

          <div className="whatIDo">
            <h2 style={{textAlign: "left", paddingLeft: "5vw", fontSize: "29px"}}>What I do</h2>
          </div>
          <div>
            {/* List Here in a grid all of the languages broken down by section with logos */}
          </div>



        </div>
    );
  }
}

export default Aboutme;