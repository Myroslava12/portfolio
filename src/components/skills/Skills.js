import React, {useContext, useEffect, useRef} from "react";
import {NavigationContext} from "../../context/context";
import { useInView } from 'react-intersection-observer';
import skills from "../../images/skills3.png";
import api from "../../images/api.png";
import firebase from "../../images/firebase.png";
import { TimelineMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const imgBox = useRef();
    const tl = new TimelineMax();
    const activeSkills = useContext(NavigationContext);

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "-150px",
    });

    useEffect(() => {inView && activeSkills.setActiveRoute("Skills")}, [inView]);

    const animateIcons = () => {
        const animate = tl.staggerFromTo(imgBox.current.children, .8, {
            autoAlpha: 0,
        }, {
            autoAlpha: 1
        }, .2);
        ScrollTrigger.create({
            animation: animate,
            trigger: imgBox.current.children,
            start: "-350px center",
            toggleActions: 'play none none none'
        })
    }
    
    useEffect(() => {
        animateIcons();
    }, []);

    return (
        <section className="skills--box" id="skills" ref={ref}>
            <div className="app--container">
                <h2 className="about--title">Technologies / Skills</h2>
                <div className="skills--img--box" ref={imgBox}>
                    <img className="skills--img" src={skills} alt="skills" />
                    <div className="skills--icon icon--html">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="skills--icon icon--css">
                        <i className="fab fa-css3"></i>
                    </div>
                    <div className="skills--icon icon--js">
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="skills--icon icon--sass">
                        <i className="fab fa-sass"></i>
                    </div>
                    <div className="skills--icon icon--react">
                        <i className="fab fa-react"></i>
                    </div>
                    <div className="skills--icon icon--firebase">
                        <img src={firebase} className="firebase--img" alt="firebase" />
                    </div>
                    <div className="skills--icon icon--api">
                        <img src={api} className="api--img" alt="api" />
                    </div>
                    <div className="skills--icon icon--git">
                        <i className="fab fa-git-alt"></i>
                    </div>
                    <div className="skills--icon icon--figma">
                        <i className="fab fa-figma"></i>
                    </div>
                    <div className="skill--text--box html--text">
                        <span>body</span>
                        <span>head</span>
                        <span>section</span>
                        <span>nav</span>
                    </div>
                    <div className="skill--text--box css--text">
                        <span>Flex</span>
                        <span>BEM</span>
                        <span>Bootstrap</span>
                        <span>Grid</span>
                    </div>
                    <div className="skill--text--box js--text">
                        <span>async/await</span>
                        <span>Types</span>
                        <span>DOM</span>
                        <span>Functions</span>
                        <span>Objects</span>
                        <span>ES6</span>
                    </div>
                    <div className="skill--text--box sass--text">
                        <span>imports</span>
                        <span>variables</span>
                        <span>mixins</span>
                        <span>functions</span>
                    </div>
                    <div className="skill--text--box react--text">
                        <span>JSX</span>
                        <span>Components</span>
                        <span>Hooks</span>
                        <span>Redux</span>
                        <span>State</span>
                        <span>Context API</span>
                    </div>
                    <div className="skill--text--box firebase--text">
                        <span>Authentication</span>
                        <span>Database</span>
                        <span>Firestore</span>
                    </div>
                    <div className="skill--text--box api--text">
                        <span>JSON</span>
                        <span>HTTP Methods</span>
                        <span>Rest APIs</span>
                    </div>
                    <div className="skill--text--box git--text">
                        <span>git init</span>
                        <span>git clone</span>
                        <span>git pull</span>
                        <span>git push</span>
                        <span>git merge</span>
                    </div>
                    <div className="skill--text--box figma--text">
                        <span>Design</span>
                        <span>Import filies</span>
                        <span>Graphic</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;