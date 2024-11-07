import React from 'react'
import './OurBlogImages.css'
import gallery1 from '../../assets/images/gallery-1.webp'
import gallery2 from '../../assets/images/gallery-2.webp'
import gallery3 from '../../assets/images/gallery-3.webp'
import gallery4 from '../../assets/images/gallery-4.webp'
import gallery5 from '../../assets/images/gallery-5.webp'
import gallery6 from '../../assets/images/gallery-6.webp'


function OurBlogImages() {
  return (
    <>
        <div className="blog_images">
            <img data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" src={gallery1} alt="404" />
            <img data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" src={gallery2} alt="404" />
            <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" src={gallery3} alt="404" />
            <img data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" src={gallery4} alt="404" />
            <img data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" src={gallery5} alt="404" />
            <img data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" src={gallery6} alt="404" />
        </div>
    </>
  )
}

export default OurBlogImages