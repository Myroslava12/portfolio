import React from "react";
import "./App.scss";
import { NavigationProvider } from "../context/context";
import { Navigation } from "./navigation/Navigation";
import { Home } from "./home/Home";
import { AboutMe } from "./about/AboutMe";
import { Projects } from "./projects/Projects";
import { Skills } from './skills/Skills';
import { Contact } from "./contact/Contact";

export const App = () => {
    return (
        <div className="main--app">
            <NavigationProvider>
                <Navigation />
                <Home />
                <Projects />
                <Skills />
                <AboutMe />
                <Contact />
            </NavigationProvider>
        </div>
    )
}
