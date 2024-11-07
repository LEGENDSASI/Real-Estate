import React,{useState,useRef,useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bg1 from '../../assets/images/bg_1.jpg.webp';
import bg2 from '../../assets/images/bg_2.jpg.webp';
import bg3 from '../../assets/images/bg_3.jpg.webp';
import './Slider.css'



const spanbtnStyle = {
  color: 'white',
  padding:'1rem 3rem',
  
  backgroundColor:'#5ea51d',
  border:'none',
  position: 'relative', // Position text absolutely
  zIndex: 1, // Ensure text is above the image
  width: '40%',
  fontSize: '12px',
};


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  position: 'relative', // Position relative for absolutely positioned children
};

const slideImages = [
  {
    url: bg1,
    caption: 'Your Property Is Our Priority',
    desc:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    url: bg2,
    caption: 'Let Your Home Be Unique & Stylist',
    desc:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    url: bg3,
    caption: 'Modern House Make Better Life',
    desc:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
];

const Slideshow = () => {
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
    console.log("working")
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    slideRef.current.goTo(index); // Use the goTo method to change the slide
  };

  useEffect(() => {
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const line3 = document.getElementById('line3')

    console.log(line1, line2, line3);

    line1.classList.toggle('lineBigColor', activeIndex === 0);
    line2.classList.toggle('lineBigColor', activeIndex === 1);
    line3.classList.toggle('lineBigColor', activeIndex === 2);
 
  },[activeIndex]);

  return (
    <div className="slide-container">
      <Slide 
        ref={slideRef}
        defaultIndex={activeIndex}
        duration={5000} // Duration of each slide in milliseconds
        transitionDuration={300} // Duration of the transition between slides
        autoplay={true}
        onChange={handleSlideChange}
      >
        {slideImages.map((slideImage, index) => (
          <div className='each-slide' key={index}>
            <div style={{ ...divStyle }}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                  filter: 'brightness(60%)', // Apply filter only to the image
                  position: 'absolute', // Positioning to fill the parent
                  top: 0,
                  left: 0,
                  zIndex: 0,
                  backgroundSize:'cover', // Ensure the image is behind the text
                }
              }
              />
              <div data-aos="fade-up" className='flexContent'>
              <div className='flexTextStyle'>
              <span className='spancapStyle'>{slideImage.caption}</span>
              <span className='spandescStyle'>{slideImage.desc}</span>
              <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
              <button style={spanbtnStyle}>LEARN MORE&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></button>
              </div>
              </div>
              <div className='lines'>
              <hr onClick={() => goToSlide(0)} className='line1' id='line1'/>
              <hr onClick={() => goToSlide(1)} className='line2 lineBigColor' id='line2'/>
              <hr onClick={() => goToSlide(2)} className='line3' id='line3'/>
              </div>
              </div>
              
              
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
