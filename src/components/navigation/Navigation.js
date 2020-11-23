import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

const Navigation = () => {
    return (
        <nav className="main--nav">
                <div className="nav--logo">
                    <a href="#">mi.skala</a>
                </div>
                <ul className="nav--menu">
                    <li>
                        <NavLink to="/" className="menu--link">
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="menu--link">
                            <i className="fa fa-user"></i>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link href="#" className="menu--link">
                            <i className="fa fa-code"></i>
                            <span>Technologies</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="menu--link">
                            <i className="fa fa-folder-open"></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="menu--link">
                            <i className="fa fa-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            <div className="nav--line"></div>
        </nav>
    )
}

export default Navigation;