import React from "react";

function Slider(props) {
    return (
        <>
            <div className="img">
                <img src={props.img} alt="sliderimg" />
            </div>
        </>
    )
}
export{Slider}