import React from 'react';
import './App.scss';
import Home from './home/Home';
import AboutMe from "./about/AboutMe";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cursor from "./cursor/Cursor";

function App() {
  return (
    // <main className="main--app">
      // <Router>
      // <Cursor />
      //   <Switch>
      //     <Route exact path="/" component={Home} />
      //     <Route path="/about" component={AboutMe} />
      //   </Switch>
      // </Router>
    // </main>
    <>
      <Home />
      {/* <Cursor /> */}
    </>
  );
}

export default App;
