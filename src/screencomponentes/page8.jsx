import React from "react";
import img1 from "../Image/11.02.16-Foundsgiving-Studio-EMP-21-1024x731.jpg"
import img2 from "../Image/11.13.19-ABC-Gala-2019-Villa-Visuals-7-scaled-1-1024x683.jpg"

function Page8() {
    return (
        <>
            <div className="page8">
                <div style={{ width: "113%", paddingLeft: "1rem" }} className="first">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <ul>
                        <li>24 Carrots Catering</li>
                        <li>Catering</li>
                    </ul>
                    <h2>Setting Your Holiday Table</h2>
                    <p>From the first inquiry to final details, we are proud to provide full-service catering, making you feel like a guest at your own event…</p>
                </div>
                <div className="first">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <ul style={{ backgroundColor: "#000000" }}>
                        <li>24 Carrots Catering</li>
                        <li>Featured Venues</li>
                    </ul>
                    <h2>The BEST Venues for Big Holiday Bashes</h2>
                    <p>Make the most the holiday season by thinking BIG! Invite everyone from friends family, clients and the entire company to join in on the fun…</p>
                </div>
            </div>
            <div style={{textAlign:"center",padding:"2rem 0"}} className="p8div">
            <button className="p8">More From the blog</button>
            </div>
        </>
    )
}
export { Page8 }