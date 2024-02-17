import React from "react";
import img1 from "../Image/1a.jpg"
import img2 from "../Image/2a.jpg"
import img3 from "../Image/3a.jpg"
import img4 from "../Image/4a.png"
import img5 from "../Image/5a.jpg"
import img6 from "../Image/6a.jpg"
import img7 from "../Image/7a.jpg"

function Page4() {
    const image = [
        {
            id: 1,
            img: `${img1}`,
            button: 'EXPLORE VENUE',
            text: 'The Richland',
            detail: 'ORANGE'
        },
        {
            id: 2,
            img: `${img2}`,
            button: 'EXPLORE VENUE',
            text: 'Oak Creek Golf Club',
            detail: 'ERVINE'
        },
        {
            id: 3,
            img: `${img3}`,
            button: 'EXPLORE VENUE',
            text: 'Rancho Las Lomas',
            detail: 'SILVERADO'
        },
        {
            id: 4,
            img: `${img4}`,
            button: 'EXPLORE VENUE',
            text: 'Franciscan Gardens',
            detail: 'SAN JUAN CAPISTRANO'
        },
        {
            id: 5,
            img: `${img5}`,
            button: 'EXPLORE VENUE',
            text: 'The Colony House',
            detail: 'ANAHEIM'
        },
        {
            id: 6,
            img: `${img6}`,
            button: 'EXPLORE VENUE',
            text: 'Ole Hanson Beach Club',
            detail: 'San Clemente'
        },
        {
            id: 7,
            img: `${img7}`,
            button: 'EXPLORE VENUE',
            text: 'AV Irvine',
            detail: 'irvine'
        }
    ]
    return (
        <>
            <div className="page4">
                <div className="image">
                    {
                        image.map((data, index) => {
                            return (
                                <>
                                    <div key={index} className="img">
                                        <div className="img">
                                            <img src={data.img} alt="" />
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export { Page4 }