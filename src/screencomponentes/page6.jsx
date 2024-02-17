import React from "react";
import gif from "../Image/Home_Services_GIF_R3.gif"

function Page6() {
    return (
        <>
            <div className="page6">
                <div className="m-text">
                <div className="text">
                    <h4>Gourmet Catering</h4>
                    <p>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
                    <button>Learn More</button>
                </div>
                <div className="text">
                    <h4>Bar Service</h4>
                    <p>Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than&nbsp;one!</p>
                    <button>Learn More</button>
                </div>
                </div>
                <div className="img">
                    <img src={gif} alt="" />
                </div>
                <div className="m-text">
                <div className="text">
                    <h4>Staffing</h4>
                    <p>The hand-selected team at 24 Carrots are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you’ll work with professionals who genuinely care about the success of your event!</p>
                    <button>Learn More</button>
                </div>
                <div className="text">
                    <h4>Event Production</h4>
                    <p>If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at 24 Carrots can pull it off on an epic scale!</p>
                    <button>Learn More</button>
                </div>
                </div>
            </div>
        </>
    )
}
export { Page6 }