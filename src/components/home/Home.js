import React, { useEffect, useContext } from 'react';
import {NavigationContext} from "../../context/context";
import { Canvas } from 'react-three-fiber';
import Header from "../header/Header";
import Box from "./Box";
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const activeHome = useContext(NavigationContext);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {inView && activeHome.setActiveRoute("Home")}, [inView]);

    return (
        <div className="canvas--box" id="home" ref={ref}>
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
    )
}

export default Home;