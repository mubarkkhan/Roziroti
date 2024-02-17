import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import img1 from "../Image/k1.jpg"
import img2 from "../Image/k2.jpg"
import img3 from "../Image/k3.jpg"

function Page9(){
    return(
        <>
        <div className="page9">
            <div className="text">
                <h2>Experiences Designed To Be Shared</h2>
                <p>Follow us for more from 24 Carrots.</p>
                <span style={{marginRight:"1rem"}}><FaInstagram /> instagram</span>
                <span><FaPinterest />Pinterest</span>
            </div>
            <div style={{position:"relative"}} className="img">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="image">
                    <img style={{transform:"rotate(27deg)",position:"absolute",top:"-26%",left:"70%"}} src={img2} alt="" />
                </div>
                <div className="image">
                    <img style={{transform:"rotate(350deg)",position:"absolute",top:"50%",left:"59%"}} src={img3} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export{Page9}