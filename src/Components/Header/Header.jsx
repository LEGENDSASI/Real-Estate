import React from 'react'
import './Header.css'
import Slider from '../Carousel/Slider'
// import SliderBootstrap from '../Carousel/Corousel'
import CategoryPlace from '../Categories/CategoryPlace'
import OurProperties from '../OurProperties/OurProperties'
import AboutUs from '../AboutUs/AboutUs'
import Agents from '../Agents/Agents'
import OurBlog from '../OurBlog/OurBlog'
import Footer from '../Footer/Footer'

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
    <div className="search_input">

      <div className="enter_keyword">
        <label htmlFor="Enter Keyword">ENTER KEYWORD</label>
         <div className="enter_keyword_input">
         <i className='fa fa-search'></i><input type="text" placeholder='Enter Keyword' />
         </div>
      </div>

      <div className="enter_keyword">
        <label htmlFor="Enter Keyword">PROPERTY TYPE</label>
         <div className="enter_keyword_input">
         <i className='fa fa-chevron-down'></i>
         <select name="property_type" id="property_type">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="land">Land</option>
          <option value="industrial">Industrial</option>
        </select>
         </div>
      </div>

      <div className="enter_keyword">
        <label htmlFor="Enter Keyword">LOCATION</label>
         <div className="enter_keyword_input">
         <i className='fa-solid fa-location-dot'></i><input type="text" placeholder='Search Location' />
         </div>
      </div>

      <div className="enter_keyword">
        <label htmlFor="Enter Keyword">PRICE LIMIT</label>
         <div className="enter_keyword_input">
         <i className='fa fa-chevron-down'></i>
         <select name="price_limit" id="price_limit">
          <option value="100">$100</option>
          <option value="10,000">$10,000</option>
          <option value="50,000">$50,000</option>
          <option value="100,000">$100,000</option>
          <option value="200,000">$200,000</option>
          <option value="300,000">$300,000</option>
          <option value="400,000">$400,000</option>
          <option value="500,000">$500,000</option>
          <option value="600,000">$600,000</option>
          <option value="700,000">$700,000</option>
          <option value="800,000">$800,000</option>
          <option value="900,000">$900,000</option>
          <option value="1,000,000">$1,000,000</option>
          <option value="2,000,000">$2,000,000</option>
        </select>

         </div>
      </div>

      <div id='search_btn'>
        <h4>SEARCH</h4>
      </div>

    </div>
    </div>
    <CategoryPlace/>
    <div className="background_color_change">
    <OurProperties/>
    <AboutUs/>
    <Agents/>
    <OurBlog/>
    <Footer/>
    </div>
    </>
  )
}

export default Header
