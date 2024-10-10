import Carousel from 'react-bootstrap/Carousel';
import firstImage from '../../assets/images/bg_1.jpg.webp';
import secondImage from '../../assets/images/bg_2.jpg.webp';
import thirdImage from '../../assets/images/bg_3.jpg.webp';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/Header.css'




function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img src={firstImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={secondImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={thirdImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;