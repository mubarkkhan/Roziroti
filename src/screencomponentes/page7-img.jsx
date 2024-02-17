import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Image/t1.jpg"
import img2 from "../Image/t2.jpg"
import img3 from "../Image/t3.jpg"
import img4 from "../Image/t4.jpg"
import { Page7 } from './page7';

function Page7img() {
    return (
        <Carousel>
            <Carousel.Item>
                <Page7 img={img1} />
                <Carousel.Caption>
                    <h3>“The staff was toh3-notch – professional, hardworking, and just a pleasure to work with.”</h3>
                    <h2>ROBIN</h2>
                    <p>Executive Assistant, Corelogic</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Page7 img={img2} />
                <Carousel.Caption>
                    <h3>“I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.”</h3>
                    <h2>Amanda & Jethro</h2>
                    <p>The Colony House</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Page7 img={img3} />
                <Carousel.Caption>
                    <h3>“From the moment we inquired with the venue, through all the planning, execution, and clean-up of the wedding day, we had an amazing experience working with the team.”</h3>
                    <h2>Kellie & Paul</h2>
                    <p>Franciscan Gardens</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Page7 img={img4} />
                <Carousel.Caption>
                    <h3>“24 Carrots made our week-long event a stress-free and successful one!”</h3>
                    <h2>Kimberly</h2>
                    <p>Creston</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Page7img;