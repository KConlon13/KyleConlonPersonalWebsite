import React from 'react';
import './App.css';
import KyleDrumming from "./KyleDrumming2.jpg"
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
              style={{minHeight: 260, minWidth: 480, marginRight: "5vh", borderRadius: "0.2em"}}/>
            </div>
          </div>
          {/* End of Bio Box on Top */}

          <div className="whatIDo">
            <h2 style={{textAlign: "left", paddingLeft: "5vw", fontSize: "29px"}}>What I do</h2>
          </div>
          <div className="SkillsGrid">
            {/* List Here in a grid all of the languages broken down by section with logos */}

            <div className="ui middle aligned list" style={{paddingTop: "1em"}}>
                <div class="item">
                  <div class="content">
                    <u><div class="header">Front-End Skills</div></u>
                      <div class="item" style={{paddingBottom: "5px", paddingTop: "5px"}}>
                      <i class="fab fa-js-square" style={{color: "rgb(250, 242, 91)", paddingRight: "4px"}}></i>Javascript</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fab fa-react" style={{color: "rgb(20, 228, 228)", paddingRight: "4px"}}></i>
                      React.js</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                        <i class="fab fa-react" style={{color: "rgb(20, 228, 228)", paddingRight: "4px"}}></i>React Native</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fab fa-html5" style={{color: "orange", paddingRight: "4px"}}></i>
                        HTML</div>
                      <div class="item">
                        <i class="fab fa-css3-alt" style={{color: "#2965f1", paddingRight: "4px"}}></i>
                        CSS</div>
                  </div>
                </div>
            </div>

            <div className="ui middle aligned list">
                <div class="item">
                  <div class="content">
                    <u><div class="header">Back-End Skills</div></u>
                      <div class="item" style={{paddingBottom: "5px", paddingTop: "5px"}}>
                        <i class="far fa-gem" style={{color: "red", paddingRight: "4px"}}></i>Ruby</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fas fa-gem" style={{color: "red", paddingRight: "4px"}}></i>Rails</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fas fa-database" style={{color: "grey", paddingRight: "4px"}}></i>SQL</div>
                  </div>
                </div>
            </div>

            <div className="ui middle aligned list">
                <div class="item">
                  <div class="content">
                    <u><div class="header">Other Skills</div></u>
                      <div class="item" style={{paddingBottom: "5px", paddingTop: "5px"}}>
                      <i class="fab fa-github" style={{color: "black", paddingRight: "4px"}}></i>Git</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fas fa-map-marker-alt" style={{color: "purple", paddingRight: "4px"}}></i>
                        Heroku</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fab fa-bootstrap" style={{color: "purple", paddingRight: "4px"}}></i>
                        Bootstrap UI</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fab fa-stripe-s" style={{color: "rgb(20, 228, 228)", paddingRight: "4px"}}></i>
                        Semantic UI</div>
                      <div class="item" style={{paddingBottom: "5px"}}>
                      <i class="fab fa-react" style={{color: "rgb(18, 198, 200)", paddingRight: "4px"}}></i>
                        React Native Elements</div>
                  </div>
                </div>
            </div>

            {/* <div className="backEndSkills" style={{display: "inline"}}>
              <h3>Back-End Skills</h3>
            </div>
            <div className="otherSkills" style={{display: "inline"}}>
              <h3>Other Skills</h3>
            </div> */}

          </div>



        </div>
    );
  }
}

export default Aboutme;