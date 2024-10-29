import React from 'react'
import './AboutUs.css'
import AboutUsLeft from '../../assets/images/about.webp'
import AboutUsRight from '../../assets/images/about-1.webp'

function AboutUs() {
  return (
    <>
    <div className="about_us">
      <div className="about_us_align">
        <div className="about_us_content">
        <div className="left_content">
            <img src={AboutUsLeft} alt="404" />
        </div>
        <div className="right_content">
            <p className='upper about_us_text'>About us</p>
            <h2>Oakberry A Real Estate Company</h2>
            <p className='about_us_paragraph'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className="right_content_flex">
            <div className="number_of_property">

              <div className="year_of_exp">
                <h1 className='number_of'>50</h1>
                <p className='upper number_text'>Years of Experienced</p>
              </div>
              <div className="year_of_exp">
                <div style={{display:'flex'}}>
                <h1 className='number_of'>210</h1>
                <p style={{ fontWeight: '600',fontSize:'40px', lineHeight: '1'}}>&#312;<span style={{ fontSize:'30px'}}>&#43;</span></p>
                </div>
                
                <p className='upper number_text'>Total Properties</p>
              </div>
              <div className="year_of_exp">
                <h1 className='number_of'>450</h1>
                <p className='upper number_text'>Qualified Realtors</p>
              </div>

              <div className="year_of_exp">
                <h1 className='number_of'>100</h1>
                <p className='upper number_text'>Total Branches</p>
              </div>


            </div>
            <div className="right_content_image">
            <img src={AboutUsRight} alt="404" />
            </div>
            </div>
        </div>
        </div>
                
      </div>
      <div className="find_best_for_leaving">
        <div className='overlay_color'></div>
        <div className='find_best_for_leaving_align'>
        <div className="find_best_for_leaving_content">
          <div className="find_best_for_leaving_text">
            <h1 style={{fontWeight:'600',lineHeight:'1.5'}}>Find Best Place For Leaving</h1>
            <p>Find Best Place For Leaving</p>
          </div>
          <div className="btn_div">
          <button className='upper'>Get in Touch</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs