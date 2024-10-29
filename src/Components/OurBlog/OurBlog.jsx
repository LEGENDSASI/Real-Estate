import React from 'react'
import './OurBlog.css'
import blogImage1 from '../../assets/images/image_1.webp'
import blogImage2 from '../../assets/images/image_2.webp'
import blogImage3 from '../../assets/images/image_3.webp'
import blogImage4 from '../../assets/images/image_4.webp'
import gallery1 from '../../assets/images/gallery-1.webp'
import gallery2 from '../../assets/images/gallery-2.webp'
import gallery3 from '../../assets/images/gallery-3.webp'
import gallery4 from '../../assets/images/gallery-4.webp'
import gallery5 from '../../assets/images/gallery-5.webp'
import gallery6 from '../../assets/images/gallery-6.webp'


function OurBlog() {
  return (
    <>
    <div className="ourBlog">
        <div className="ourBlog_text">
            <p className='upper'>Our Blog</p>
            <h2>Recent Blog</h2>
        </div>
        <div className="blog_full_content">
        <div className="blog_content">
            <div className="blog_item">
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

            <div className="blog_item">
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

            <div className="blog_item">
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

            <div className="blog_item">
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
        <div className="blog_images">
            <img src={gallery1} alt="404" />
            <img src={gallery2} alt="404" />
            <img src={gallery3} alt="404" />
            <img src={gallery4} alt="404" />
            <img src={gallery5} alt="404" />
            <img src={gallery6} alt="404" />
        </div>
    </div>
    </>
  )
}

export default OurBlog