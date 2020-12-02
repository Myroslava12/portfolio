import React, {useEffect} from "react";
import skills from "../images/skills.png";
import api from "../images/api.png";
import firebase from "../images/firebase.png";
import AOS from 'aos';

const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    return (
        <div className="skills--box" id="skills">
            <div className="app--container">
                <h2 className="about--title">Technologies / Skills</h2>
                <div className="skills--img--box">
                    <img className="skills--img" src={skills} alt="skills" />
                    <div className="skills--icon icon--html" data-aos="fade-up">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="skills--icon icon--css" data-aos="fade-up">
                        <i className="fab fa-css3"></i>
                    </div>
                    <div className="skills--icon icon--js" data-aos="fade-up">
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="skills--icon icon--sass" data-aos="fade-up">
                        <i className="fab fa-sass"></i>
                    </div>
                    <div className="skills--icon icon--react" data-aos="fade-up">
                        <i className="fab fa-react"></i>
                    </div>
                    <div className="skills--icon icon--firebase" data-aos="fade-up">
                        <img src={firebase} className="firebase--img" alt="firebase" />
                    </div>
                    <div className="skills--icon icon--api" data-aos="fade-up">
                        <img src={api} className="api--img" alt="api" />
                    </div>
                    <div className="skills--icon icon--git" data-aos="fade-up">
                        <i className="fab fa-git-alt"></i>
                    </div>
                    <div className="skills--icon icon--figma" data-aos="fade-up">
                        <i className="fab fa-figma"></i>
                    </div>
                    <div className="skill--text--box html--text">
                        <span>body</span>
                        <span>head</span>
                        <span>section</span>
                        <span>nav</span>
                    </div>
                    <div className="skill--text--box css--text">
                        <span>flex</span>
                        <span>BEM</span>
                        <span>Bootstrap</span>
                        <span>Grid</span>
                    </div>
                    <div className="skill--text--box js--text">
                        <span>async/await</span>
                        <span>Types</span>
                        <span>DOM</span>
                        <span>Functions</span>
                        <span>Ojects</span>
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
                        <span>git branch</span>
                    </div>
                    <div className="skill--text--box figma--text">
                        <span>design</span>
                        <span>import filies</span>
                        <span>Graphic</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;