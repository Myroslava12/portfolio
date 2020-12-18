import React, { useState } from "react";
import {NavigationContext} from "../context/context";
import Navigation from "./navigation/Navigation";
import Home from "./home/Home";
import AboutMe from "./about/AboutMe";
import Projects from "./projects/Projects";
import Skills from './skills/Skills';
import Contact from "./contact/Contact";

const Page = () => {
    const [activeRoute, setActiveRoute] = useState(null);

    return (
        <div className="main--app">
            <NavigationContext.Provider value={{activeRoute, setActiveRoute}}>
                <Navigation />
                <Home />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </NavigationContext.Provider>
        </div>
    )
}

export default Page;