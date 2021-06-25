

import './index.css';
import Home from './components/Home'
import Country from './components/Country'
import Ingredients from './components/Ingredients'
import Random from './components/Random'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Link
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Router>
        <div>
         


          <Switch>
            <Route path="/random">
              <Random />
            </Route>
            <Route path="/ingredients">
              <Ingredients />
            </Route>
            <Route path="/country">
              <Country />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

