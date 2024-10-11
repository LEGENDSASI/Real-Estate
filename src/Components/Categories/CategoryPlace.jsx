import React from 'react'
import './CategoryPlace.css'

function CategoryPlace() {
  return (
    <>
    <div className="category_place">
      <div className="category_place_text">
        <p className='upper category_first_text'>Oakberry Categories</p>
        <h2 className='category_second_text'>Explore Our Categories & Places</h2>
      </div>
      <div className="category_places">
        <div className="all_place_boxes">
            <div className="place_box">
            <i class="fa-solid fa-mountain-city"></i>
              <p className='place_text'>Land</p>
            </div>
            <div className="place_box">
            <i class="fa-regular fa-building"></i>
              <p className='place_text'>Residential</p>
            </div>
            <div className="place_box">
            <i class="fa-solid fa-city"></i>
              <p className='place_text'>Commerial</p>
            </div>

            <div className="place_box">
            <i class="fa-solid fa-industry"></i>
              <p className='place_text'>Industrial</p>
            </div>

        </div>
        
      </div>
      <div className="properties_places">
        <div className="property_place_alltext">
            <p className='property_place_text'>New York</p>
            <button className='property_place_btn'>200 Properties</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CategoryPlace