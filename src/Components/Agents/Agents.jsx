import React from 'react'
import './Agents.css'
import Agent1 from '../../assets/images/team-1.webp'
import Agent2 from '../../assets/images/team-2.webp'
import Agent3 from '../../assets/images/team-3.webp'
import Agent4 from '../../assets/images/team-4.webp'


function Agents() {
  return (
    <>
          <div className="max_width_container_size">
          <div className="max_width_container">
    <div className="agents">
    <div className="agents_pictures">
      <div className="half_bg">
      <div data-aos="fade-up" data-aos-duration="1000" className="agents_text">
        <p className='upper'>Meets Our Agents</p>
        <h2>Our Agents</h2>
        </div>
        <div className="agents_pic">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="agent_image">
          <div className="agent_image_div">
            <img src={Agent1} alt="404" />
            </div>
            <div className="agent_content">
              <div className="agent_content_one">
                <p className='upper agentfirst_p'>Listing</p>
                <p className='upper agentsecond_p'>10 Properties</p>
              </div>
              <div className="agent_content_two">
                <p>Mike Bochs</p>
                </div>
                <div className="agent_content_three">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="agent_image">
            <div className="agent_image_div">
            <img src={Agent2} alt="404" />
            </div>
            <div className="agent_content">
              <div className="agent_content_one">
                <p className='upper agentfirst_p'>Listing</p>
                <p className='upper agentsecond_p'>10 Properties</p>
              </div>
              <div className="agent_content_two">
                <p>Mike Bochs</p>
                </div>
                <div className="agent_content_three">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="agent_image">
          <div className="agent_image_div">
            <img src={Agent3} alt="404" />
            </div>
            <div className="agent_content">
              <div className="agent_content_one">
                <p className='upper agentfirst_p'>Listing</p>
                <p className='upper agentsecond_p'>10 Properties</p>
              </div>
              <div className="agent_content_two">
                <p>Mike Bochs</p>
                </div>
                <div className="agent_content_three">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" className="agent_image">
          <div className="agent_image_div">
            <img src={Agent4} alt="404" />
            </div>
            <div className="agent_content">
              <div className="agent_content_one">
                <p className='upper agentfirst_p'>Listing</p>
                <p className='upper agentsecond_p'>10 Properties</p>
              </div>
              <div className="agent_content_two">
                <p>Mike Bochs</p>
                </div>
                <div className="agent_content_three">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
          </div>

          
        </div>
        </div>

    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Agents