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
            <h2 className="about--title">Technologies / Skills</h2>
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
        </div>
    )
}

export default Skills;