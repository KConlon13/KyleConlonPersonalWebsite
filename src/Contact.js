import React from 'react';
import './App.css';

class Contact extends React.Component {

  render(){
    return (
        <div className="ContactMainBox">

          <h1 id="ContactTitle">CONTACT</h1>
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
    );
  }
}

export default Contact;