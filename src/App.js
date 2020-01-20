import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar"
import Resume from "./Resume"
import Aboutme from "./Aboutme"
import Projects from "./Projects"
import Contact from "./Contact"

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
        <Navbar/>

          <div className="ContentPageMain">
            <Switch>
              <Route exact path="/" component={Aboutme}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/portfolio" component={Projects}/>
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;