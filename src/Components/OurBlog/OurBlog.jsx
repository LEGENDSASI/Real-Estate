import React from 'react'
import './OurBlog.css'
import blogImage1 from '../../assets/images/image_1.webp'
import blogImage2 from '../../assets/images/image_2.webp'
import blogImage3 from '../../assets/images/image_3.webp'
import blogImage4 from '../../assets/images/image_4.webp'
import OurBlogImages from './OurBlogImages'

function OurBlog() {
  return (
    <>
          <div className="max_width_container_size">
          <div className="max_width_container">
    <div className="ourBlog">
        <div data-aos="fade-up" data-aos-duration="1000" className="ourBlog_text">
            <p className='upper'>Our Blog</p>
            <h2>Recent Blog</h2>
        </div>
        <div className="blog_full_content">
        <div className="blog_content">
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="blog_item">
                <img src={blogImage1} alt="404" />
                <div className="blogDesc">
                    <div className="upper blogDesc_content1">
                        <p className='blogDesc_text1'>Admin</p>
                        <p className='blogDesc_text2'>Dec. 01, 2020</p>
                        <p className='blogDesc_text3'>3 Comments    </p>
                    </div>
                    <div className="blogDesc_content2">
                        <h2>New Home Sales Picked Up in December</h2>
                    </div>
                    <div className="blogDesc_content3">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
                
            </div>

            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="blog_item">
                <img src={blogImage2} alt="404" />
                <div className="blogDesc">
                    <div className="upper blogDesc_content1">
                        <p className='blogDesc_text1'>Admin</p>
                        <p className='blogDesc_text2'>Dec. 01, 2020</p>
                        <p className='blogDesc_text3'>3 Comments    </p>
                    </div>
                    <div className="blogDesc_content2">
                        <h2>New Home Sales Picked Up in December</h2>
                    </div>
                    <div className="blogDesc_content3">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
                
            </div>

            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="blog_item">
                <img src={blogImage3} alt="404" />
                <div className="blogDesc">
                    <div className="upper blogDesc_content1">
                        <p className='blogDesc_text1'>Admin</p>
                        <p className='blogDesc_text2'>Dec. 01, 2020</p>
                        <p className='blogDesc_text3'>3 Comments    </p>
                    </div>
                    <div className="blogDesc_content2">
                        <h2>New Home Sales Picked Up in December</h2>
                    </div>
                    <div className="blogDesc_content3">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
                
            </div>

            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" className="blog_item">
                <img src={blogImage4} alt="404" />
                <div className="blogDesc">
                    <div className="upper blogDesc_content1">
                        <p className='blogDesc_text1'>Admin</p>
                        <p className='blogDesc_text2'>Dec. 01, 2020</p>
                        <p className='blogDesc_text3'>3 Comments    </p>
                    </div>
                    <div className="blogDesc_content2">
                        <h2>New Home Sales Picked Up in December</h2>
                    </div>
                    <div className="blogDesc_content3">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        </div>
        </div>
        <OurBlogImages />
    </div>
    </>
  )
}

export default OurBlog