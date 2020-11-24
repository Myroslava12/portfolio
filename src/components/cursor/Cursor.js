import React, {useEffect, useState} from "react";
import cx from "classnames";

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
       addEventListeners();
       handleLinkHoverEvents();
       return () => removeEventListeners();
    }, []);

    const handleLinkHoverEvents = () => {
       document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mousemove", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
       });
    };

    const addEventListeners = () => {
       document.addEventListener("mousemove", onMouseMove);
    };

    const removeEventListeners = () => {
       document.removeEventListener("mousemove", onMouseMove);
    };
    const onMouseMove = (e) => {
       setPosition({x: e.clientX, y: e.clientY});
    }; 

    return <div
            className={cx("cursor", {"cursor--hovered": linkHovered})}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`
            }}
            ></div>
}

export default Cursor;