import React, { useEffect, useContext, useMemo } from 'react';
import { NavigationContext } from "../../context/context";
import { Canvas } from 'react-three-fiber';
import { Header } from "./HomeTitle";
import { Box } from "./Box";
import { useInView } from 'react-intersection-observer';

export const Home = () => {
    const activeHome = useContext(NavigationContext);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "-100px",
    });

    const geometries = useMemo(() => {
        return new Array(500).fill().map((_, i) => {
            return <Box 
                key={i}
                i={i}
                color="#3d6355"
                args={[.8, .8, .8]}
            />
        });
    }, [])

    useEffect(() => {inView && activeHome.setActiveRoute("Home")}, [inView]);

    return (
        <div className="canvas--box" id="home" ref={ref}>
            {/* <Canvas className="canvas" camera={{fov: 50,  position: [0, 0, 30] }}>
                <directionalLight color="#ffffff" intensity={.8} position={[-1, 2, 4]} />
                <pointLight position={[-10, 0, 0]} intensity={0.1} />
                {geometries}
            </Canvas> */}
            <Header />
        </div>
    )
}
