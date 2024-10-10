import React from 'react'
import './Header.css'
import Slider from '../Carousel/Slider'
// import SliderBootstrap from '../Carousel/Corousel'

function Header() {
  return (
    <>
    <header className='headerContent'>
    <div className="top_full_content">

    <div className="top_content">
    <i class="fa-solid fa-map"></i>
    <div className="top_text">
    <p><span>Free Call </span>+1 234 456 78910</p>
    <p className='lower_text'>Call Us Now 24/7 Customer Support</p>
    </div>
    </div>

    <div className="top_content">
    <i class="fa-solid fa-paper-plane"></i>
    <div className="top_text">
    <p>Location</p>
    <p className='lower_text'>Suite 721 New York NY 10016</p>
    </div>
    </div>

    <div className="top_content">
    <i class="fa-brands fa-connectdevelop"></i>
    <div className="top_text">
    <p><span>Connect </span>with us</p>
    <p className='lower_text' style={{fontSize:"10px"}}>FACEBOOK TWITTER DRIBBLE</p>
    </div>
    </div>

    </div>

    <nav className='navbar_text'>
      <div className="logo">
        <h2>Oakberry</h2>
        <p style={{textTransform:'uppercase',fontWeight:'bold'}}>Real Estate Agency</p>
      </div>
      <div className="navbar_links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROPERTIES</li>
        <li>AGENTS</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </div>
      <div className='submit_property'>
        <button className='submit_pry_btn'>SUBMIT A PROPERTY</button>
        <p className='MenuBtn'><i class="fa-solid fa-bars"></i>&nbsp;MENU</p>
      </div>
    </nav>
    </header>
    <Slider/>
    <div className="search_property">
    <div className="buy_rent_btn">
      <button className='buy_btn'>Buy Properties</button>
      <button className='rent_btn'>Rent Properties</button>
    </div>
    </div>
    {/* <SliderBootstrap/> */}
    
    </>
  )
}

export default Header
