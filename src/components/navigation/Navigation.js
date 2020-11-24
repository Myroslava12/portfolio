import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import cx from "classnames";

const Navigation = () => {
    const [move, setMove] = useState(false);
    const onMouseMove = () => setMove(true);

    const onMouseOut = () => setMove(false);

    return (
        <nav className="main--nav">
                <div className="nav--logo">
                    <a
                        className={cx({"text--hovered": move })} 
                        href="/"
                        onMouseMove={onMouseMove} 
                        onMouseOut={onMouseOut} 
                    >
                        mi.skala
                    </a>
                </div>
                <ul className="nav--menu">
                    <li>
                        <Link 
                            onMouseMove={onMouseMove} 
                            onMouseOut={onMouseOut} 
                            to="home"
                            smooth={true}
                            duration={500}
                            className="menu--link"
                        >
                            <i className="fa fa-home"></i>
                            <span className={cx( {"text--hovered": move })}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onMouseMove={onMouseMove} 
                            onMouseOut={onMouseOut}
                            to="about"
                            smooth={true}
                            duration={400}
                            className="menu--link"
                        >
                            <i className="fa fa-user"></i>
                            <span className={cx({"text--hovered": move })}>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onMouseMove={onMouseMove} 
                            onMouseOut={onMouseOut}
                            to="skills" 
                            smooth={true}
                            duration={400}
                            className="menu--link"
                        >
                            <i className="fa fa-code"></i>
                            <span className={cx({"text--hovered": move })}>Skills</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="projects"
                            smooth={true}
                            duration={500} 
                            className="menu--link"
                            onMouseMove={onMouseMove} 
                            onMouseOut={onMouseOut} 
                        >
                            <i className="fa fa-folder-open"></i>
                            <span className={cx({"text--hovered": move })}>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contact"
                            smooth={true}
                            duration={600} 
                            className="menu--link"
                            onMouseMove={onMouseMove} 
                            onMouseOut={onMouseOut} 
                        >
                            <i className="fa fa-envelope"></i>
                            <span className={cx({"text--hovered": move })}>Contact</span>
                        </Link>
                    </li>
                </ul>
            <div className="nav--line"></div>
        </nav>
    )
}

export default Navigation;