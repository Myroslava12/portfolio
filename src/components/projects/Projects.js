import React from "react";
import classical from "../images/classical.png";
import foundation from "../images/foundation.png";

const Projects = () => {
    return (
        <section className="projects--section" id="projects">
            <div className="app--container">
                <h2 className="about--title">My Projects</h2>
                <div className="projects--box">
                    <div className="projects--info">
                        <h3 className="projects--title">ClassicalApp</h3>
                        <div className="project--card">
                            <div className="project--front">
                                <div className="project--img classical--img"></div>
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
                    <div className="projects--technologies">
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
                                <div className="project--img foundation--img"></div>
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
                    <div className="projects--technologies">
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
            </div>
        </section>
    )
}

export default Projects;