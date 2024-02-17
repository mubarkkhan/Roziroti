import React from "react";
import Page1img from "./page1-img";

function Page1() {
    return (
        <>
            <div className="page1">
                <div className="text">
                    <h1>Welcome to 24 carrots</h1>
                    <h2>Remarkable Catering & Events</h2>
                    <p>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
                    <button>GET IN TOUCH</button>
                </div>
                <div className="img">
                    <Page1img/>
                </div>
            </div>
        </>
    )
}
export { Page1 }