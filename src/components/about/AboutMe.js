import React, {useEffect, useRef} from "react";
import picture from "../images/my-picture.png";
import cv from "../images/Myroslava Skala.pdf";
import Cursor from "../cursor/Cursor";
import { TimelineMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const about = useRef();
    const tl = new TimelineMax();
    
    useEffect(() => {
        const animate = tl.staggerFromTo(about.current.children, 1, {
            transform: "scale(0)",
        }, {
            transform: "scale(1)"
        }, .2);
        ScrollTrigger.create({
            animation: animate,
            trigger: about.current.children,
            start: "-350px center",
            toggleActions: 'play none none none'
        })
    }, []);

    return (
        <section className="section--about" id="about">
            <div className="app--container" ref={about}>
                <div className="about--info">
                    <h2 className="about--title">About me</h2>
                    <p className="about--info--text">My name is Myroslava Skala and I'm a musician who finds passion in <strong>programming</strong>.</p>
                    <p className="about--info--text">In programming fascinates me the ability to create something fruitful out of just a
                        simple text editor and a compiler.
                    </p>
                    <p className="about--info--text">I've successfully finished the course JavaScript: React and got a certificate. Currently, I'm improving my skills in
                        JavaScript and <strong>React</strong>, and also I'm learning TypeScript. I
                        have a great enthusiasm for work, I will put a lot of work into writing clear and semantically correct code.
                    </p>
                    <a href={cv} className="about--link" download>Download CV
                        <div className="horizontal"/>
                        <div className="vertical"/>
                    </a>
                </div>
                <div className="about--img--box">
                    <img className="my--picture" src={picture} alt="my-picture" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;