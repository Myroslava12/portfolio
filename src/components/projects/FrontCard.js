import React, { useEffect, useRef } from "react";
import { TimelineMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FrontCard = ({img, style}) => {
    const image = useRef();
    const tl = new TimelineMax();

    const animateImage = (project) => {
        const x = tl.staggerFromTo(project.current, .6, {
            transform: "scale(0)",
        }, {
            transform: "scale(1)",
        }, 0);
        ScrollTrigger.create({
            animation: x,
            trigger: project.current,
            toggleActions: 'play none none none'
        })     
    }

    useEffect(() => {
        animateImage(image)
    }, []);

    return (
        <div className="project--front">
            <div className="project--img" ref={image}>
                <img src={img} alt="classical"  className={style} />
            </div>
        </div>
    )
}

export default FrontCard;