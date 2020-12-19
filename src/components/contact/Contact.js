import React, {useRef, useEffect, useContext} from "react";
import {NavigationContext} from "../../context/context";
import { useInView } from 'react-intersection-observer';
import { TimelineMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contact = useRef();
    const tl = new TimelineMax();
    const activeContact = useContext(NavigationContext);

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "-150px",
    });

    useEffect(() => {inView && activeContact.setActiveRoute("Contact")}, [inView]);
    
    useEffect(() => {
        const animate = tl.staggerFromTo(contact.current.children, .6, {
            transform: "scale(0)",
        }, {
            transform: "scale(1)",
        }, .2);
        ScrollTrigger.create({
            animation: animate,
            trigger: contact.current.children,
            toggleActions: 'play none none none'
        })
    }, []);

    return (
        <section className="section--contact" id="contact" ref={ref}>
            <div className='app--container'>
                <h2 className="about--title">Contact Me</h2>
                <div className="contact--box">
                    <div className="maile--box">
                        <h3 className="contact--title">Let's work together</h3>
                        <a className="contact--link--maile" href="mailto:myroslavaskala@gmail.com">myroslavaskala@gmail.com</a>
                    </div>
                    <div className="media--box" ref={contact}>
                        <a className="contact--link" href="https://github.com/Myroslava12" target="_blank"><i className="fab fa-github"></i></a>
                        <a className="contact--link" href="https://www.linkedin.com/in/myroslava-skala-342b21196/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className="contact--link" href="https://www.facebook.com/myroslava.skala" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a className="contact--link" href="https://www.instagram.com/skala_mira/" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a className="contact--link" href="https://web.telegram.org/#/im" target="_blank"><i className="fab fa-telegram"></i></a>
                    </div>
                </div>
                <p className="contact--copyright">&copy; 2020 Myroslava Skala</p>
            </div>
        </section>
    )
}

export default Contact;