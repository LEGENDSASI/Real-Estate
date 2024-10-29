import React from 'react'
import './OurProperties.css'
import property1 from '../../assets/images/work-1.webp'
import property2 from '../../assets/images/work-2.webp'
import property3 from '../../assets/images/work-3.webp'
import property4 from '../../assets/images/work-4.webp'
import person from '../../assets/images/person_1.jpg'
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { SiKaufland } from "react-icons/si";
import { IoIosPlay } from "react-icons/io";




function OurProperties() {
  return (
    <>
    <div className="our_properties">
      <div className="our_properties_all_text">
      <div className="our_properties_first_text upper">
        <p>Our Properties</p>
      </div>
      <div className="our_properties_second_text">
        <h2>Featured Properties</h2>
      </div>
      </div>
      <div className="property_cards">

        <div className="property_card">
          <div className="property_image">
          <img src={property1} alt="404" />
          <p>$300,000</p>
          </div>
          <div className="property_card_text">
            <div className="profile">
              <div className="profile_picture">
                <img src={person} alt="404" />
                <p>John Dorf</p>
              </div>
              <div className="postedOn">
                <p>2 weeks ago</p>
              </div>
              </div> 
              
            <div className="property_name">
            <h3>Sunny Loft Property</h3>
            </div>
            <div className="location_rent">
              <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <p>New York</p>
              </div>
              <div className="rent_sale">
                <p>Sale</p>
              </div>
          </div>
          <div className="room_facility">
                <div className="property_bed">
                <IoBedOutline className='bed'/>
                <p>3</p>
              </div>
              <div className="property_bath">
                <PiBathtub className='bath'/>
                <p>3</p>
              </div>
              <div className="property_sqft">
                <SiKaufland className='sqft'/>
                <p>1,878 sqft</p>
              </div>

              </div>

              

          </div>
        </div>

        <div className="property_card">
          <div className="property_image">
          <img src={property2} alt="404" />
          <p className='strike'>800,000</p>
          <p>$300,000</p>

          </div>
          <div className="property_card_text">
            <div className="profile">
              <div className="profile_picture">
                <img src={person} alt="404" />
                <p>John Dorf</p>
              </div>
              <div className="postedOn">
                <p>2 weeks ago</p>
              </div>
              </div> 
              
            <div className="property_name">
            <h3>Sunny Loft Property</h3>
            </div>
            <div className="location_rent">
              <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <p>New York</p>
              </div>
              <div className="rent_sale" id='rent'>
                <p>Rent</p>
              </div>
          </div>
          <div className="room_facility">
                <div className="property_bed">
                <IoBedOutline className='bed'/>
                <p>3</p>
              </div>
              <div className="property_bath">
                <PiBathtub className='bath'/>
                <p>3</p>
              </div>
              <div className="property_sqft">
                <SiKaufland className='sqft'/>
                <p>1,878 sqft</p>
              </div>

              </div>

              

          </div>
        </div>

        <div className="property_card">
          <div className="property_image">
          <img src={property3} alt="404" />
          <p>$300</p>
          </div>
          <div className="property_card_text">
            <div className="profile">
              <div className="profile_picture">
                <img src={person} alt="404" />
                <p>John Dorf</p>
              </div>
              <div className="postedOn">
                <p>2 weeks ago</p>
              </div>
              </div> 
              
            <div className="property_name">
            <h3>Sunny Loft Property</h3>
            </div>
            <div className="location_rent">
              <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <p>New York</p>
              </div>
              <div className="rent_sale" >
                <p>Sale</p>
              </div>
          </div>
          <div className="room_facility">
                <div className="property_bed">
                <IoBedOutline className='bed'/>
                <p>3</p>
              </div>
              <div className="property_bath">
                <PiBathtub className='bath'/>
                <p>3</p>
              </div>
              <div className="property_sqft">
                <SiKaufland className='sqft'/>
                <p>1,878 sqft</p>
              </div>

              </div>

              

          </div>
        </div>

        <div className="property_card">
          <div className="property_image">
          <img src={property4} alt="404" />
          <p>$300 / mo</p>
          </div>
          <div className="property_card_text">
            <div className="profile">
              <div className="profile_picture">
                <img src={person} alt="404" />
                <p>John Dorf</p>
              </div>
              <div className="postedOn">
                <p>2 weeks ago</p>
              </div>
              </div> 
              
            <div className="property_name">
            <h3>Sunny Loft Property</h3>
            </div>
            <div className="location_rent">
              <div className="location">
              <i class="fa-solid fa-location-dot"></i>
              <p>New York</p>
              </div>
              <div className="rent_sale" id='rent'>
                <p>Rent</p>
              </div>
          </div>
          <div className="room_facility">
                <div className="property_bed">
                <IoBedOutline className='bed'/>
                <p>3</p>
              </div>
              <div className="property_bath">
                <PiBathtub className='bath'/>
                <p>3</p>
              </div>
              <div className="property_sqft">
                <SiKaufland className='sqft'/>
                <p>1,878 sqft</p>
              </div>

              </div>

              

          </div>
        </div>
        

      </div>
      <div className="modern_house_video">
        <div className="modern_house_text">
        <h1>Modern House Video</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div style={{display:'flex',justifyContent:'center'}}>
          <div className="playbtn_div">
          <IoIosPlay className='playbtn'/>
          </div>
          </div>
        </div>
      </div>
  
    </div>
    </>
  )
}

export default OurProperties