import React from 'react'
import './HomePage.css'
import Header from '../Header/Header'
import Slider from '../Carousel/Slider'
import SearchProperty from '../SearchProperty/SearchProperty'
// import SliderBootstrap from '../Carousel/Corousel'
import CategoryPlace from '../Categories/CategoryPlace'
import OurProperties from '../OurProperties/OurProperties'
import OurPropertiesModernVideo from '../OurProperties/OurPropertiesModernVideo'
import AboutUs from '../AboutUs/AboutUs'
import AboutUsFindBestPlace from '../AboutUs/AboutUsFindBestPlace'
import Testimonial from '../Testimonial/Testimonial'
import Agents from '../Agents/Agents'
import OurBlog from '../OurBlog/OurBlog'
import Footer from '../Footer/Footer'


function HomePage() {

  return (
    <>
    <Header page_link_index={0}/>
    <Slider />  
    
    <SearchProperty />
    <CategoryPlace/>

    <div className="background_color_change">
      <OurProperties HomePage={4}/>

      <OurPropertiesModernVideo />
      <AboutUs/>
      <AboutUsFindBestPlace />

      <Testimonial />
      <Agents HomePage={4}/>

      <OurBlog/>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage