import React, { useContext } from "react";
import {Link} from "react-scroll";
import cx from "classnames";
import {NavigationContext} from "../../context/context";

export const Navigation = () => {
    const activeComponent = useContext(NavigationContext);

    return (
        <nav className="main--nav">
                <div className="nav--logo">
                    <a href="/">mi.skala</a>
                </div>
                <ul className="nav--menu">
                    <li>
                        <Link 
                            to="home"
                            smooth={true}
                            duration={500}
                            className={cx("menu--link", {
                                "active--component": activeComponent.activeRoute === "Home" 
                            })} 
                        >
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="projects"
                            smooth={true}
                            duration={500} 
                            className={cx("menu--link", {
                                "active--component": activeComponent.activeRoute === "Projects" 
                            })} 
                        >
                            <i className="fa fa-folder-open"></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="skills" 
                            smooth={true}
                            duration={400}
                            className={cx("menu--link", {
                                "active--component": activeComponent.activeRoute === "Skills" 
                            })} 
                        >
                            <i className="fa fa-code"></i>
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="about"
                            smooth={true}
                            duration={400}
                            className={cx("menu--link", {
                                "active--component": activeComponent.activeRoute === "AboutMe" 
                            })} 
                        >
                            <i className="fa fa-user"></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contact"
                            smooth={true}
                            duration={600} 
                            className={cx("menu--link", {
                                "active--component": activeComponent.activeRoute === "Contact" 
                            })} 
                        >
                            <i className="fa fa-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            <div className="nav--line"></div>
        </nav>
    )
}
