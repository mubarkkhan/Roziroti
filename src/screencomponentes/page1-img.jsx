import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Image/1.1-Lorely-Meza-1.jpg"
import img2 from "../Image/1.2-Holly-Sigafoos-Photo.jpg"
import img3 from "../Image/1.3-Holly-Sigafoos-Photo.jpg"
import img4 from "../Image/1.4-Lorely-Meza.jpg"
import { Slider } from './bootstrap-slider';

function Page1img() {
  return (
    <Carousel>
      <Carousel.Item>
        <Slider img={img1}/>
      </Carousel.Item>
      <Carousel.Item>
      <Slider img={img2}/>
      </Carousel.Item>
      <Carousel.Item>
      <Slider img={img3}/>
      </Carousel.Item>
      <Carousel.Item>
      <Slider img={img4}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Page1img;