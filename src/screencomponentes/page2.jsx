import React, { useState } from "react";
import img1 from "../Image/wedding-scroll-cropped.jpg"
import img2 from "../Image/2.2-Social-Lorely-Meza.jpg"
import img3 from "../Image/2.3-Corporate-Joel-Maus.jpg"
import img4 from "../Image/2.4-Venues-Jenny-Quicksall.jpg"

function Page2() {
    const [content, setcontent] = useState("content1")
    const click = (newcontent) => {
        setcontent(newcontent)
    }
    return (
        <>
            <div className="page2">
                {content === 'content1' && (
                    <>
                        <div className="content">
                            <div className="img">
                                <img src={img1} alt="changing-img" />
                            </div>
                            <div className="detail">
                                <h2>Making Every <br /> Experience Magical</h2>
                                <div className="main">
                                    <div className="button">
                                        <button onClick={() => click('content1')}>Weddings</button>
                                        <button onClick={() => click('content2')}>Social</button>
                                        <button onClick={() => click('content3')}>Corporate</button>
                                        <button onClick={() => click('content4')}>Venues</button>
                                    </div>
                                    <div className="m-det">
                                        <h1>Exceptional Weddings</h1>
                                        <p>The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {content === 'content2' && (
                    <>
                        <div className="content">
                            <div className="img">
                                <img src={img2} alt="changing-img" />
                            </div>
                            <div className="detail">
                                <h2>Making Every Experience Magical</h2>
                                <div className="main">
                                    <div className="button">
                                        <button onClick={() => click('content1')}>Weddings</button>
                                        <button onClick={() => click('content2')}>Social</button>
                                        <button onClick={() => click('content3')}>Corporate</button>
                                        <button onClick={() => click('content4')}>Venues</button>
                                    </div>
                                    <div className="m-det">
                                        <h1>Incomparable Social Events</h1>
                                        <p>We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {content === 'content3' && (
                    <>
                        <div className="content">
                            <div className="img">
                                <img src={img3} alt="changing-img" />
                            </div>
                            <div className="detail">
                                <h2>Making Every Experience Magical</h2>
                                <div className="main">
                                    <div className="button">
                                        <button onClick={() => click('content1')}>Weddings</button>
                                        <button onClick={() => click('content2')}>Social</button>
                                        <button onClick={() => click('content3')}>Corporate</button>
                                        <button onClick={() => click('content4')}>Venues</button>
                                    </div>
                                    <div className="m-det">
                                        <h1>One-of-a-kind Corporate Events</h1>
                                        <p>Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {content === 'content4' && (
                    <>
                        <div className="content">
                            <div className="img">
                                <img src={img4} alt="changing-img" />
                            </div>
                            <div className="detail">
                                <h2>Making Every Experience Magical</h2>
                                <div className="main">
                                    <div className="button">
                                        <button onClick={() => click('content1')}>Weddings</button>
                                        <button onClick={() => click('content2')}>Social</button>
                                        <button onClick={() => click('content3')}>Corporate</button>
                                        <button onClick={() => click('content4')}>Venues</button>
                                    </div>
                                    <div className="m-det">
                                        <h1>Exclusive Social Venues</h1>
                                        <p>We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations.</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export { Page2 }