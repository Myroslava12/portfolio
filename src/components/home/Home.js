import React, { useRef, useState } from 'react';
import { Canvas,  useFrame, useThree } from 'react-three-fiber';
import {MeshWobbleMaterial, OrbitControls} from "drei";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Cursor from "../cursor/Cursor";
import AboutMe from "../about/AboutMe";

const Box = ({i, color}) => {
    const mesh = useRef(null);
    
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    const { viewport } = useThree();

    return (
        <mesh 
            position={[i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width, i < 5 ? 0 : viewport.height / 2 - Math.random() * viewport.height, i < 6 ? 10 : 10 - Math.random() * 35]}
            ref={mesh}
         >
            <octahedronGeometry name="geometry" color={color} args={[.5]} />
            <MeshWobbleMaterial 
                attach='material'
                color={color}
                speed={1}
                factor={3}
            />
        </mesh>
    )
}

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
                    {/* <OrbitControls /> */}
                </Canvas>
                <Header />
            </div>
            <AboutMe />
        </div>
    )
}

export default Home;