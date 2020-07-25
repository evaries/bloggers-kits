import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavComponent from './components/NavComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kits from './pages/Kits';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <NavComponent />
      <Switch>
        <Redirect exact from="/" to="home" />
        <Route path="/home"> <Home /> </Route>
        <Route path="/kits"> <Kits /> </Route>
        <Route path="/about"> <About /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
