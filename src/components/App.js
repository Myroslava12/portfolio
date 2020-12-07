import React from 'react';
import './App.scss';
import Home from './home/Home';
import AboutMe from "./about/AboutMe";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cursor from "./cursor/Cursor";

function App() {
  return (
    <>
      <Home />
      {/* <Cursor /> */}
    </>
  );
}

export default App;
