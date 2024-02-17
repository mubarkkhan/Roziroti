import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="foot">
                    <div className="logo">
                        <h1>24 CARROTS</h1>
                        <p>CATERING & EVENTS</p>
                        <h4>The event specialists at our Southern California headquarters are available to help with every aspect of your event.</h4>
                        <div className="line"></div>
                        <h2>CALL US     <span>714.942.6000 • 800.717.1545</span></h2>
                        <h2>EMAIL US <span>info@24carrots.com</span></h2>
                        <h2>FIND US <span>150 Baker Street East, Costa Mesa, CA 92626</span></h2>
                    </div>
                    <div className="detail">
                        <div className="first">
                            <h1>About</h1>
                            <ul>
                                <li>About 24 Carrots</li>
                                <li>Meet the Team</li>
                                <li>Awards & Press</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="first">
                            <h1>Services</h1>
                            <ul>
                                <li>Gourmet Catering</li>
                                <li>Bar Service</li>
                                <li>Staffing</li>
                                <li>Production</li>
                            </ul>
                        </div>
                        <div className="first">
                            <h1>Events</h1>
                            <ul>
                                <li>Weddings</li>
                                <li>Corporate</li>
                                <li>Social</li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                        <div className="first">
                            <h1>Venues</h1>
                            <ul>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="first">
                            <h1>Follow Us</h1>
                            <ul>
                                <li><FaFacebookF /> <span>Facebook</span></li>
                                <li><FaInstagram /> <span>Instagram</span></li>
                                <li><FaPinterest /> <span>Pinterest</span></li>
                                <li><FaLinkedin /> <span>Linkedin</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="fline"></div>
                <div className="footer1">
                    <p>© 2023 24 Carrot Catering & Events. All rights reserved.</p>
                    <h4>ADA Accessibility Policy . <span>Privacy Policy</span></h4>
                </div>
            </div>
        </>
    )
}
export { Footer }