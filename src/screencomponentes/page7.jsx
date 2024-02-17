import React from "react";

function Page7(props){

    return(
        <>
        <div className="page7">
            <div className="page7-container">
                <h2>Our Happy Clients</h2>
                <p>Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
                <img src={props.img} alt="" />
                <h1>What’s Cookin’</h1>
            </div>
        </div>
        </>
    )
}
export{Page7}