import React, {useRef, useEffect} from "react";
import classical from "../images/classical.png";
import foundation from "../images/foundation.png";
import { TimelineMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const project1 = useRef();
    const project2 = useRef();
    const imgAnimate1 = useRef();
    const imgAnimate2 = useRef();
    const tl = new TimelineMax();

    const animateTech = (project) => {
        const x = tl.staggerFromTo(project.current.children, 1, {
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

    const animateImage = (project) => {
        const x = tl.staggerFromTo(project.current, 1, {
            transform: "scaleX(0)",
        }, {
            transform: "scaleX(1)",
        }, .2);
        ScrollTrigger.create({
            animation: x,
            trigger: project.current,
            start: "top center",
            toggleActions: 'play none none none'
        })     
    }

    useEffect(() => {
        animateImage(imgAnimate1);
        animateImage(imgAnimate2);
        animateTech(project1);
        animateTech(project2);
    }, []);

    return (
        <section className="projects--section" id="projects">
            <div className="app--container">
                <h2 className="about--title">My Projects</h2>
                <div className="projects--box">
                    <div className="projects--info">
                        <h3 className="projects--title">ClassicalApp</h3>
                        <div className="project--card">
                            <div className="project--front">
                                <div className="project--img" ref={imgAnimate1}>
                                    <img src={classical} alt="classical"  className="classical--img" />
                                </div>
                            </div>
                            <div className="project--back">
                                <h3 className="project--card--title">ClassicalApp 🎼</h3>
                                <p className="project--card--text">Web application created for classical music lovers</p>
                                <p className="project--card--text">You can find your favorite composers or discover the world of classical music for yourself🎶🎵 </p>
                                <p className="project--card--text">Additionally, you can find some of the world’s most famous classical music melodies that you could hear in movies, commercials etc...</p>
                                <div className="project--link--box">
                                    <a href="https://github.com/Myroslava12/React_Classical_music" target="_blank" className="project--link about--link">
                                        GitHub
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a className="project--link about--link" href="https://ms-classical-app.herokuapp.com/" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects--technologies" ref={project1}>
                        <h3 className="projects--title">Technologies</h3>
                        <div className="projects--border project--border--1"></div>
                        <div className="projects--border project--border--2"></div>
                        <div className="projects--border project--border--3"></div>
                        <div className="projects--border project--border--4"></div>
                        <div className="projects--border project--border--5"></div>
                        <div className="projects--border project--border--6"></div>
                        <div className="tech--box tech--box-1">React</div>
                        <div className="tech--box tech--box-2">SASS</div>
                        <div className="tech--box tech--box-3">Webpack</div>
                        <div className="tech--box tech--box-4">npm</div>
                        <div className="tech--box tech--box-5">YouTube API</div>
                        <div className="tech--box tech--box-6">Open Opus API</div>
                    </div>
                </div>

                <div className="projects--box">
                    <div className="projects--info">
                        <h3 className="projects--title">Foundation Project</h3>
                        <div className="project--card">
                            <div className="project--front">
                                <div className="project--img" ref={imgAnimate2}>
                                    <img src={foundation} alt="foundation" className="foundation--img" />
                                </div>
                            </div>
                            <div className="project--back">
                                <h3 className="project--card--title">Foundation Project</h3>
                                <h3 className="project--card--subtitle">Oddaj w dobre ręce</h3>
                                <p className="project--card--text">Web application where everyone will be able to donate unnecessary things to trusted institutions.</p>
                                <div className="project--link--box">
                                    <a href="https://github.com/Myroslava12/oddaj--rzeczy" target="_blank" className="project--link about--link">
                                        GitHub
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a className="project--link about--link" href="https://oddaj--rzeczy.herokuapp.com/" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects--technologies" ref={project2}>
                        <h3 className="projects--title">Technologies</h3>
                        <div className="projects--border project--border--1"></div>
                        <div className="projects--border project--border--2"></div>
                        <div className="projects--border project--border--3"></div>
                        <div className="projects--border project--border--4"></div>
                        <div className="projects--border project--border--5"></div>
                        <div className="projects--border project--border--6"></div>
                        <div className="tech--box tech--box-1">React</div>
                        <div className="tech--box tech--box-2">SASS</div>
                        <div className="tech--box tech--box-3">Webpack</div>
                        <div className="tech--box tech--box-4">npm</div>
                        <div className="tech--box tech--box-5">Firebase</div>
                        <div className="tech--box tech--box-6">Firestore</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;