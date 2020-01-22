import React from 'react';
import './App.css';
import ArtWorkImage from "./ArtWork.png"
import ChewsyImage from "./Chewsy.png"
import PotterlessImage from "./Potterless.png"

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

          <div class="projectShowContainer">

            <div class="projectCard">
              <h1 class="projectCardHeader">ArtWork</h1>
              <img class="projectImage" src={ArtWorkImage} alt="ArtWork"/>
              <p class="project-bio">Bringing mural-needing businesses and money-needing artists together. ArtWork is a platform for businesses to find the perfect artist to paint the officespace mural of their corporate dreams. Artists sign up to be featured on the site for businesses to peruse through, and in return find themselves more clients for mural work.</p>

              <div>
                <a href="https://github.com/KConlon13/ArtWorkFrontend" target="_blank" rel="noopener noreferrer">
                  <h2 class="Github-Demo-Links">Github</h2>
                </a>
                <h2 class="Divider-Github-Demo"> | </h2>
                <a href="https://www.youtube.com/watch?v=vrLMXdY-g58" target="_blank" rel="noopener noreferrer">
                  <h2 class="Github-Demo-Links">Demo</h2>
                </a>
              </div>

              <div class="Built-With-List">
                <h3 class="BuiltHeader">Built Using</h3>
                <p class="P-List">React.js</p>
                <p class="P-List">Javascript</p>
                <p class="P-List">Ruby</p>
                <p class="P-List">Rails</p>
                <p class="P-List">HTML & CSS</p>
                <p class="P-List">Semantic</p>
              </div>

            </div>

            <div class="projectCard">
              <h1 class="ChewsyCardHeader">Chewsy</h1>
              <img class="ChewsyImage" src={ChewsyImage} alt="Chewsy"/>
              <p class="Chewsy-project-bio">Chewsy is a food allergy-friendly restaurant finding iOS mobile app for people with food allergies. Enabling those with peanut, treenut, gluten, dairy, egg, and wheat allergies to finally feel comfortable while dining out, with Chewsy you and your loved ones will never have to worry about Epipens or finding the location of the nearest hospital again. Eat without fear, and explore the wonderful world of food unhithered!</p>

              <div>
                <a href="https://github.com/KConlon13/ChewsyFrontend" target="_blank" rel="noopener noreferrer"> 
                  <h2 class="Github-Demo-Links">Github</h2>
                </a>
                <h2 class="Divider-Github-Demo"> | </h2>
                <a href="https://www.youtube.com/watch?v=dtCtC0es7S0" target="_blank" rel="noopener noreferrer">
                  <h2 class="Github-Demo-Links">Demo</h2>
                </a>
              </div>

              <div class="Built-With-List">
                <h3 class="BuiltHeader">Built Using</h3>
                <p class="P-List">React Native</p>
                <p class="P-List">Javascript</p>
                <p class="P-List">Ruby</p>
                <p class="P-List">Rails</p>
                <p class="P-List">HTML & CSS</p>
                <p class="P-List">RN Elements</p>
                <p class="P-List">Heroku</p>
              </div>
            </div>

            <div class="projectCard">
              <h1 class="projectCardHeader">Potterless</h1>
              <img class="projectImage" src={PotterlessImage} alt="Potterless"/>
              <p class="project-bio">The Wizarding World (aka Warner Bros) have done an incredible job creating interactive platforms to keep Harry Potter fans satisfied for years now- whether it be the immersive amusement park in Universal Studios, the epic book/movie series, or their online presence... namely the Pottermore website. This inspired the building of Potterless (the name implying it provides some Harry Potter fun but not any more than Pottermore)- a light-hearted attempt to create an engaging and themed experience that could (almost) rival or imitate what the Pottermore website does so successfully.</p>
              <div>
                <a href="https://github.com/KConlon13/Mod2PotterlessProject" target="_blank" rel="noopener noreferrer">
                  <h2 class="Github-Demo-Links">Github</h2>
                </a>
                <h2 class="Divider-Github-Demo"> | </h2>
                <a href="https://www.youtube.com/watch?v=RsICl8cgj2s" target="_blank" rel="noopener noreferrer">
                  <h2 class="Github-Demo-Links">Demo</h2>
                </a>
              </div>

              <div class="Built-With-List">
                <h3 class="BuiltHeader">Built Using</h3>
                <p class="P-List">Ruby</p>
                <p class="P-List">Rails</p>
                <p class="P-List">HTML & CSS</p>
                <p class="P-List">Bootstrap</p>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

export default Projects;