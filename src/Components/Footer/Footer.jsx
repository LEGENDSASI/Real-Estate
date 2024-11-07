import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <>
   <div className="footer">
   <div className='footer_parent_upper'>
    <div className="max_width_container_size">
    <div className="max_width_container">
    <div className="footer_full_content">

        <div className="footer_content1">
            <div className="footer_content_title">
                <h2>Oakberry</h2>
                <p className='upper'>Real Estate Agency</p>
            </div>
            <div className="footer_content_text">
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="footer_content_icon">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>

        </div>

        <div className="footer_content2">
            <div className="footer_content_title">
                <h2>Offers</h2>
            </div>
            <div className="footer_content_text">
                <ul>
                 <div className="footer_list">
                <i class="fa-solid fa-angle-right"></i><li>Properties</li>
                </div>
                <div className="footer_list">
                <i class="fa-solid fa-angle-right"></i><li>Agents</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-angle-right"></i><li>Locations</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-angle-right"></i><li>Clients Support</li>
                    </div>
                </ul>
            </div>
        </div>

        <div className="footer_content2">
            <div className="footer_content_title">
                <h2>Company</h2>
            </div>
            <div className="footer_content_text">
                <ul>
                 <div className="footer_list">
                <i class="fa-solid fa-angle-right"></i><li>Home</li>
                </div>
                <div className="footer_list">
                <i class="fa-solid fa-angle-right"></i><li>About</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-angle-right"></i><li>Blog</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-angle-right"></i><li>Contact Us</li>
                    </div>
                </ul>
            </div>
        </div>


        <div className="footer_content2">
            <div className="footer_content_title">
                <h2>Quick Links</h2>
            </div>
            <div className="footer_content_text">
                <ul>
                 <div className="footer_list">
                <i class="fa-solid fa-angle-right"></i><li>Terms & Conditions</li>
                </div>
                <div className="footer_list">
                <i class="fa-solid fa-angle-right"></i><li>User's Guide</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-angle-right"></i><li>Support Center</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-angle-right"></i><li>Press Info</li>
                    </div>
                </ul>
            </div>
        </div>

        <div className="footer_content1" id='last_footer_content'>
            <div className="footer_content_title">
                <h2>Have a Questions?</h2>
            </div>
            <div className="footer_content_text">
                <ul>
                 <div className="footer_list">
                <i class="fa-solid fa-map"></i><li>203 Fake St. Mountain View, San Francisco, California, USA</li>
                </div>
                <div className="footer_list">
                <i class="fa-solid fa-phone"></i><li>+2 392 3929 210</li>
                    </div>
                <div className="footer_list">

                <i class="fa-solid fa-paper-plane"></i><li>info@yourdomain.com</li>
                    </div>
                </ul>
            </div>
            </div>

    </div>
    </div>
    </div>
    </div>
    <div className='footer_parent_lower'>
    <div className="max_width_container_size">
    <div className="max_width_container">
    <div className="footer_down">
        <p>Copyright © 2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
    </div>
   </div>
   </div>
   </div>
   </div>

   </>
  )
}

export default Footer