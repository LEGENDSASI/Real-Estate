import React from 'react'
import './HomePage.css'
import Header from '../Header/Header'
import Slider from '../Carousel/Slider'
// import SliderBootstrap from '../Carousel/Corousel'
import CategoryPlace from '../Categories/CategoryPlace'
import OurProperties from '../OurProperties/OurProperties'
import AboutUs from '../AboutUs/AboutUs'
import Agents from '../Agents/Agents'
import OurBlog from '../OurBlog/OurBlog'
import Footer from '../Footer/Footer'


function HomePage() {

  return (
    <>
    <Header />
    <Slider />
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

export default HomePage