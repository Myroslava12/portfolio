import React from 'react';
import './App.scss';
import Home from './home/Home';
import Navigation from './navigation/Navigation';
import Header from "./header/Header";
import AboutMe from "./about/AboutMe";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main className="main--app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={AboutMe}/>
      </Switch>
    </Router>
      {/* <Home />
      <AboutMe /> */}
    </main>
  );
}

export default App;
