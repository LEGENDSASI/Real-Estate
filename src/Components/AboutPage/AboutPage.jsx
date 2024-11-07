import './AboutPage.css'
import Header from '../Header/Header'
import SlideImage from '../SlideImage/SlideImage'
import AboutUs from '../AboutUs/AboutUs'
import AboutUsFindBestPlace from '../AboutUs/AboutUsFindBestPlace'
import OurPropertiesModernVideo from '../OurProperties/OurPropertiesModernVideo'
import Testimonial from '../Testimonial/Testimonial'
import OurBlogImages from '../OurBlog/OurBlogImages'
import Footer from '../Footer/Footer'

function AboutPage() {
  return (
    <>
    <div className="aboutPage">
    <Header page_link_index={1}/>
    <SlideImage FirstText='About Us' SecondText='About Us' />
    <AboutUs />
    <OurPropertiesModernVideo />
    <AboutUsFindBestPlace />
    <Testimonial />
    <OurBlogImages />
    <Footer />
    </div>
    </>
  )
}

export default AboutPage