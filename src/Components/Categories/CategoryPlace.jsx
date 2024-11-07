import React from 'react'
import './CategoryPlace.css'

function CategoryPlace() {
  return (
    <>
        <div className="max_width_container_size">
        <div className="max_width_container">
    <div className="category_place">
      <div data-aos="fade-up" className="category_place_text">
        <p className='upper category_first_text'>Oakberry Categories</p>
        <h2 className='category_second_text'>Explore Our Categories & Places</h2>
      </div>
      <div className="category_places">
        <div className="all_place_boxes">
            <div data-aos="fade-up" data-aos-delay="100" className="place_box">
            <i class="fa-solid fa-mountain-city"></i>
              <p className='place_text'>Land</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="place_box">
            <i class="fa-regular fa-building"></i>
              <p className='place_text'>Residential</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="place_box">
            <i class="fa-solid fa-city"></i>
              <p className='place_text'>Commerial</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="place_box">
            <i class="fa-solid fa-industry"></i>
              <p className='place_text'>Industrial</p>
            </div>

        </div>
        
      </div>
      <div className="properties_places">
        <div className="property_place_alltext">
        <div data-aos="fade-up" data-aos-delay="100" className="property_place_text_column">
          <div className="property_place_text_box">
            <p className='property_place_text'>New York</p>
            <button className='property_place_btn'>200 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>London</p>
            <button className='property_place_btn'>100 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Chicago</p>
            <button className='property_place_btn'>120 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Illinois</p>
            <button className='property_place_btn'>300 Properties</button>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="property_place_text_column">
          <div className="property_place_text_box">
            <p className='property_place_text'>California</p>
            <button className='property_place_btn'>100 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Tennessee</p>
            <button className='property_place_btn'>200 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Texas</p>
            <button className='property_place_btn'>200 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>North Carolina</p>
            <button className='property_place_btn'>200 Properties</button>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="property_place_text_column">
          <div className="property_place_text_box">
            <p className='property_place_text'>Florida</p>
            <button className='property_place_btn'>422 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Chorlotte</p>
            <button className='property_place_btn'>200 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Orlando</p>
            <button className='property_place_btn'>200 Properties</button>
            </div>
            <div className="property_place_text_box">
            <p className='property_place_text'>Atlanta</p>
            <button className='property_place_btn'>200 Properties</button>
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

export default CategoryPlace