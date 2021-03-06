import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import {MeshWobbleMaterial} from "drei";

export const Box = ({i, color}) => {
    const mesh = useRef(null);
    
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    const { viewport } = useThree();

    const position = useMemo(() => {
        return [
            i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width, 
            i < 5 ? 0 : viewport.height / 2 - Math.random() * viewport.height,
            i < 6 ? 10 : 10 - Math.random() * 35
        ]
    }, [viewport]);

    return (
        <mesh 
            position={position}
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
