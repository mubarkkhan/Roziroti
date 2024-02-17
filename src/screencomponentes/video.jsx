import React from "react";

function Video() {
    return (
        <>
            <div className="video">
                <video width="640" height="360" controls>
                    <source src="/24carrtos-home-banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2>Simply the Finest</h2>
            </div>
        </>
    )
}
export { Video }