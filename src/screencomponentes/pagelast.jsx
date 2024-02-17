import React from "react";
import img from "../Image/signup.png"

function Pagelast(){
    return(
        <>
        <div className="pagelast">
            <div className="form">
                <h1>Endless Inspiration</h1>
                <h4>Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.</h4>
                <input type="text" placeholder="Enter Your Email"/>
                <button>Sign Up</button>
                <p>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
            </div>
            <div className="img">
                <img src={img} alt="" />
            </div>
        </div>
        </>
    )
}
export{Pagelast}