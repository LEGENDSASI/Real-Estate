import React from 'react'
import './OurPropertiesModernVideo.css'
import { IoIosPlay } from "react-icons/io";


function OurPropertiesModernVideo() {
  return (
    <>
      <div className="modern_house_video">
        <div data-aos="fade-up" className="modern_house_text">
        <h1>Modern House Video</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div style={{display:'flex',justifyContent:'center'}}>
          <div className="playbtn_div">
          <IoIosPlay className='playbtn'/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurPropertiesModernVideo