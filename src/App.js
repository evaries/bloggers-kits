import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComponent from './components/NavComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kits from './pages/Kits';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div>
        <NavComponent />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/kits">
            <Kits />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
