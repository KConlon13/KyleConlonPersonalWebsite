import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Aboutme from "./Aboutme"
import Projects from "./Projects"

function App() {


    return (
      <Router>
        <div className="App">
        <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/aboutme" component={Aboutme}/>
              <Route path="/projects" component={Projects}/>
            </Switch>
        </div>
      </Router>
    );

}

export default App;

// place react router here as well as the header/sidebar