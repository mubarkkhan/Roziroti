import React from "react"
import img from "../Image/maxresdefault.jpg"
import { IoPlayOutline } from "react-icons/io5";

function Page5(){
    return(
        <>
        <div className="page5">
            <div className="text">
                <h1>Far More Than Just Business</h1>
                <p>The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your back from the initial idea to the final farewell!</p>
                <div className="img">
                    <img src={img} alt="" />
                    <button><IoPlayOutline /></button>
                </div>
                <h1>Great Food & A Whole Lot More</h1>
                <p>Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.</p>
                <button className="ex">EXPLORE SERVICES</button>
            </div>
        </div>
        </>
    )
}
export{Page5}