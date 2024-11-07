import React from 'react'
import './SlideImage.css'
import BackgroundImage from '../../assets/images/bg_4.jpg.webp'

function SlideImage(props) {
  return (
    <>
    <div className="SlideImage">
    <img src={BackgroundImage} alt="404" />
    <div className="Image_center_text">
        <div className="First_text">
        <div className="home_text">
            <p className='upper'>Home</p><i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="other_text">
            <p className='upper'>{props.FirstText}</p><i class="fa-solid fa-angle-right"></i>
        </div>
        </div>
        <div className="Second_text">
        <h1>{props.SecondText}</h1>
        </div>
    </div>
    </div>
    </>
  )
}

export default SlideImage