import React from 'react';
import { Canvas } from 'react-three-fiber';
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import AboutMe from "../about/AboutMe";
import Projects from "../projects/Projects";
import Skills from '../skills/Skills';
import Contact from "../contact/Contact";
import Box from "./Box";

const Home = () => {

    return (
        <div className="main--app">
            <div className="canvas--box" id="home">
                <Navigation />
                <Canvas className="canvas" camera={{fov: 50,  position: [0, 0, 30] }}>
                    <directionalLight color="#ffffff" intensity={.8} position={[-1, 2, 4]} />
                    <pointLight position={[-10, 0, 0]} intensity={0.1} />
                    {new Array(500).fill().map((el, i) => {
                        return <Box 
                            key={i}
                            i={i}
                            color="#3d6355"
                            args={[.6, .6, .6]}
                        />
                    })}
                </Canvas>
                <Header />
            </div>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;