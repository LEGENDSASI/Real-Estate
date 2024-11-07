import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import './Testimonial.css';
import person1 from '../../assets/images/person_1.jpg.webp'
import person2 from '../../assets/images/person_2.jpg.webp'
import person3 from '../../assets/images/person_3.jpg.webp'

const settings = {
  dots: true,
  appendDots: dots => <ul style={{ margin: "0px" }}>{dots}</ul>,
  customPaging: i => <button style={{ fontSize: "20px", color: "black" }}>•</button>,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay:true,            // Enable autoplay
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint:1100,
      settings: {
        slidesToShow:2,
        slidesToScroll:4
      }
    },
    {
      breakpoint:700,
      settings: {
        slidesToShow:1,
        slidesToScroll:2
      }
    }
  ]
};

const testimonials = [
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person1,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person2,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person3,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person1,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person2,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person1,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person2,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person3,
    name: "Roger Scott",
    position: "Marketing Manager"
  },
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person1,
    name: "Roger Scott",
    position: "Marketing Manager"
  },  
  {
    message: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: person2,
    name: "Roger Scott",
    position: "Marketing Manager"
  }, 
  // Add more testimonials as needed
];

const Testimonial = () => (
        <div className="max_width_container_size">
            <div className="max_width_container">
  <section className="testimonial-section">
    <div className="testimonial-container">
      <div className="testimonial-header">
        <span className="subheading">Testimonial</span>
        <h2>Clients We Help</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <div className="testimonial-content">
              <p>{testimonial.message}</p>
              <div className="user-info">
                <img src={testimonial.image} className="user-image" />
                <div className="user-details">
                  <h4 className="user-name">{testimonial.name}</h4>
                  <span className="user-position upper">{testimonial.position}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  </div>
  </div>
);

export default Testimonial;
