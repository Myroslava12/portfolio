import React, { useEffect, useRef } from "react";
import { TimelineMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = ({array}) => {
    const project = useRef();
    const tl = new TimelineMax();
    const animateTech = (project) => {
        const x = tl.staggerFromTo(project.current.children, .7, {
            transform: "scaleY(0)",
            bottom: 0,
        }, {
            bottom: 0,
            transform: "scaleY(1)",
        }, .2);
        ScrollTrigger.create({
            animation: x,
            trigger: project.current.children,
            start: "top center",
            toggleActions: 'play none none none'
        })     
    }

    useEffect(() => {
        animateTech(project);
    }, []);

    return (
        <div className="projects--technologies" ref={project}>
            <h3 className="projects--title projects--title--tech">Technologies</h3>
            <div className="projects--border project--border--1"></div>
            <div className="projects--border project--border--2"></div>
            <div className="projects--border project--border--3"></div>
            <div className="projects--border project--border--4"></div>
            <div className="projects--border project--border--5"></div>
            <div className="projects--border project--border--6"></div>
            {array.map((item, i) => {
                return <div key={i} className={`tech--box tech--box-${i+1}`}>{item}</div>
            })}
        </div>
    )
}

export default Technologies;