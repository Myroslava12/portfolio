import React from "react";

export const FrontCard = ({img, style}) => {

    return (
        <div className="project--front">
            <div className="project--img">
                <img src={img} alt="classical"  className={style} />
            </div>
        </div>
    )
}
