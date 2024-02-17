import React from "react";

function Header() {
    return (
        <>
            <div className="header">
                <div className="nav1">
                    <ul>
                        <li>ABOUT <ul className="menu">
                            <li>ABOUT 24 CARROTS</li>
                            <li>TEAM</li>
                            <li>AWARDS & PRESS</li>
                            <li>BLOG</li>
                        </ul></li>

                        <li>SERVICES <ul className="menu">
                            <li>GOURMET CATERING</li>
                            <li>BAR SERVICE</li>
                            <li>STAFFING</li>
                            <li>PRODUCTION</li>
                        </ul></li>

                        <li>EVENTS <ul className="menu">
                            <li>WEDDINGS</li>
                            <li>CORPORATE</li>
                            <li>SOCIAL</li>
                            <li>GALLERY</li>
                        </ul></li>
                    </ul>
                </div>
                <div className="logo">
                    <h1>24 CARROTS</h1>
                    <p>CATERING & EVENTS</p>
                </div>
                <div className="nav2">
                    <ul>
                        <li>VENUES</li>
                        <li>CAREERS</li>
                        <li className="bu">GET IN TOUCH</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export { Header }