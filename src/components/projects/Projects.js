import React from "react";
import classical from "../images/classical.png";
import foundation from "../images/foundation.png";
import Technologies from "./Technologies";
import FrontCard from "./FrontCard";

const Projects = () => {
    const techArray1 = ["React", "SASS", "Webpack", "npm", "YouTube API", "Open Opus API"];
    const techArray2 = ["React", "SASS", "Webpack", "npm", "Firebase", "Firestore"];

    return (
        <section className="projects--section" id="projects">
            <div className="app--container">
                <h2 className="about--title">My Projects</h2>
                <div className="projects--box">
                    <div className="projects--info">
                        <h3 className="projects--title">ClassicalApp</h3>
                        <div className="project--card">
                            <FrontCard img={classical} style="classical--img" />
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
                    <Technologies array={techArray1} />
                </div>

                <div className="projects--box">
                    <div className="projects--info">
                        <h3 className="projects--title">Foundation Project</h3>
                        <div className="project--card">
                            <FrontCard img={foundation} style="foundation--img" />
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
                    <Technologies array={techArray2} />
                </div>
            </div>
        </section>
    )
}

export default Projects;