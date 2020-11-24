import React from "react";
import Navigation from "../navigation/Navigation";
import picture from "../images/my-picture.png";
import Skills from "../skills/Skills";
import cv from "../images/Myroslava Skala.pdf"

const AboutMe = () => {
    return (
        <section className="section--about" id="about">
        <div className="section--bg"></div>
            <div className="app--container">
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
                    <a href={cv} className="about--link" download>Downlong CV</a>
                </div>
                <div className="about--img--box">
                    <img className="my--picture" src={picture} alt="my-picture" />
                </div>
            </div>
            <Skills />
        </section>
    )
}

export default AboutMe;