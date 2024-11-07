import React from 'react'
import './OurProperties.css'
import property1 from '../../assets/images/work-1.webp'
// import property2 from '../../assets/images/work-2.webp'
// import property3 from '../../assets/images/work-3.webp'
// import property4 from '../../assets/images/work-4.webp'
import person from '../../assets/images/person_1.jpg'
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { SiKaufland } from "react-icons/si";





function OurProperties(props) {

// const data = [
//   {
//     old_amount: '0',
//     new_amount:'300,000',
//     name:'John Dorf',
//     property_name:'Sunny Loft Property',
//     location:'New York',
//     rent_or_sale:'Sale',
//     bed:'3',
//     bathdub:'2',
//     sqft:'1,878'
//   },
  
// ]
console.log(props.HomePage,props.HomePage === 4)
const properties = [
  {
    old_amount: '0',
    new_amount: '$300,000',
    name: 'John Dorf',
    property_name: 'Sunny Loft Property',
    location: 'New York',
    rent_or_sale: 'Sale',
    bed: '3',
    bathdub: '2',
    sqft: '1,878'
  },
  {
    old_amount: '$800,000',
    new_amount: '$425,000',
    name: 'Sarah James',
    property_name: 'Urban Penthouse',
    location: 'Los Angeles',
    rent_or_sale: 'Rent',
    bed: '2',
    bathdub: '2',
    sqft: '1,250'
  },
  {
    old_amount: '0',
    new_amount: '$675,000',
    name: 'Michael Smith',
    property_name: 'Luxury Villa',
    location: 'Miami',
    rent_or_sale: 'Sale',
    bed: '5',
    bathdub: '4',
    sqft: '3,500'
  },
  {
    old_amount: '$666,000',
    new_amount: '$550,000',
    name: 'Laura Brown',
    property_name: 'Beachfront Apartment',
    location: 'San Diego',
    rent_or_sale: 'Rent',
    bed: '3',
    bathdub: '3',
    sqft: '1,850'
  },
  {
    old_amount: '0',
    new_amount: '$1,200,000',
    name: 'David Wilson',
    property_name: 'Modern Condo',
    location: 'Chicago',
    rent_or_sale: 'Sale',
    bed: '4',
    bathdub: '3',
    sqft: '2,200'
  },
  {
    old_amount: '$985,000',
    new_amount: '$350,000',
    name: 'Emily Davis',
    property_name: 'Cozy Studio',
    location: 'Austin',
    rent_or_sale: 'Rent',
    bed: '1',
    bathdub: '1',
    sqft: '600'
  },
  {
    old_amount: '0',
    new_amount: '$800,000',
    name: 'Daniel Harris',
    property_name: 'Spacious Townhouse',
    location: 'Seattle',
    rent_or_sale: 'Sale',
    bed: '4',
    bathdub: '3',
    sqft: '2,800'
  },
  {
    old_amount: '0',
    new_amount: '$1,500,000',
    name: 'Olivia Clark',
    property_name: 'Elegant Mansion',
    location: 'Boston',
    rent_or_sale: 'Rent',
    bed: '6',
    bathdub: '5',
    sqft: '5,000'
  },
  {
    old_amount: '$7,00,000',
    new_amount: '$600,000',
    name: 'James Johnson',
    property_name: 'City View Flat',
    location: 'San Francisco',
    rent_or_sale: 'Sale',
    bed: '3',
    bathdub: '2',
    sqft: '1,400'
  },
  {
    old_amount: '0',
    new_amount: '$900,000',
    name: 'Sophia Martinez',
    property_name: 'Charming Cottage',
    location: 'Denver',
    rent_or_sale: 'Rent',
    bed: '4',
    bathdub: '3',
    sqft: '2,000'
  },
  {
    old_amount: '0',
    new_amount: '$350,000',
    name: 'John Dorf',
    property_name: 'Sunny Loft Property',
    location: 'Miami',
    rent_or_sale: 'Rent',
    bed: '2',
    bathdub: '2',
    sqft: '1,250'
  },
  {
    old_amount: '0',
    new_amount: '$550,000',
    name: 'Sarah James',
    property_name: 'Urban Penthouse',
    location: 'Chicago',
    rent_or_sale: 'Sale',
    bed: '3',
    bathdub: '2',
    sqft: '1,800'
  },
  {
    old_amount: '0',
    new_amount: '$680,000',
    name: 'Michael Smith',
    property_name: 'Luxury Villa',
    location: 'San Diego',
    rent_or_sale: 'Sale',
    bed: '5',
    bathdub: '4',
    sqft: '3,200'
  },
  {
    old_amount: '$2,00,000',
    new_amount: '$950,000',
    name: 'Laura Brown',
    property_name: 'Beachfront Apartment',
    location: 'Los Angeles',
    rent_or_sale: 'Rent',
    bed: '4',
    bathdub: '3',
    sqft: '2,100'
  },
  {
    old_amount: '0',
    new_amount: '$1,250,000',
    name: 'David Wilson',
    property_name: 'Modern Condo',
    location: 'Austin',
    rent_or_sale: 'Sale',
    bed: '3',
    bathdub: '3',
    sqft: '2,500'
  },
  {
    old_amount: '0',
    new_amount: '$400,000',
    name: 'Emily Davis',
    property_name: 'Cozy Studio',
    location: 'San Francisco',
    rent_or_sale: 'Rent',
    bed: '1',
    bathdub: '1',
    sqft: '650'
  },
  {
    old_amount: '$4,003,300',
    new_amount: '$1,600,000',
    name: 'Daniel Harris',
    property_name: 'Spacious Townhouse',
    location: 'Seattle',
    rent_or_sale: 'Sale',
    bed: '5',
    bathdub: '4',
    sqft: '3,600'
  },
  {
    old_amount: '0',
    new_amount: '$750,000',
    name: 'Olivia Clark',
    property_name: 'Elegant Mansion',
    location: 'New York',
    rent_or_sale: 'Rent',
    bed: '4',
    bathdub: '3',
    sqft: '2,800'
  },
  {
    old_amount: '$703,000',
    new_amount: '$525,000',
    name: 'James Johnson',
    property_name: 'City View Flat',
    location: 'Miami',
    rent_or_sale: 'Sale',
    bed: '3',
    bathdub: '2',
    sqft: '1,700'
  },
  {
    old_amount: '0',
    new_amount: '$2,000,000',
    name: 'Sophia Martinez',
    property_name: 'Charming Cottage',
    location: 'Los Angeles',
    rent_or_sale: 'Rent',
    bed: '6',
    bathdub: '5',
    sqft: '4,500'
  }
];


//   const propertyAmountStrikeRef = useRef(null)

// useEffect (()=>{
//   const displayNone = propertyAmountStrikeRef.current;
//   if(displayNone && (displayNone.innerText.trim() === '' || displayNone.innerText.trim() === '0')){
//     displayNone.style.display = 'none'
//   }
// },)

  // useEffect (()=>{
  //   const displayNone = document.getElementsByClassName('property_amount_strike');
  //   if(displayNone.value === '' ||  displayNone.value === 0 ) return displayNone.style.display = 'none'

  // })  
  
  return (
    <>
          <div className="max_width_container_size">
          <div className="max_width_container">
    <div className="our_properties">
      <div data-aos="fade-up" className="our_properties_all_text">
      <div className="our_properties_first_text upper">
        <p>Our Properties</p>
      </div>
      <div className="our_properties_second_text">
        <h2>Featured Properties</h2>
      </div>
      </div>
      <div className="property_cards">

        {properties.slice(props.HomePage === 4 ? 0 : 0,props.HomePage === 4 ? 4 : properties.length).map((property,index)=>(
                  <div key={index} data-aos="fade-up" data-aos-delay={(index+1)*100} className="property_card">
                  <div className="property_image">
                  <img src={property1} alt="404" />
                  <div className="property_align_content">
                    {
                    property.old_amount === null || property.old_amount === '0' || property.old_amount === '$0' ? (
                        <p className='property_amount_strike' style={{display:'none'}}></p>
                      ) : (
                        <p className='property_amount_strike'>{property.old_amount}</p>
                      )}
                      <p className='property_amount'>{property.new_amount}</p>

                    
                  </div>
                  </div>
                  <div className="property_card_text">
                    <div className="profile">
                      <div className="profile_picture">
                        <img src={person} alt="404" />
                        <p>{property.name}</p>
                      </div>
                      <div className="postedOn">
                        <p>2 weeks ago</p>
                      </div>
                      </div> 
                      
                    <div className="property_name">
                    <h3>{property.property_name}</h3>
                    </div>
                    <div className="location_rent">
                      <div className="location">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>{property.location}</p>
                      </div>
                      {property.rent_or_sale === 'Rent' || property.rent_or_sale === 'rent'?(
                      <div className="rent_sale" style={{backgroundColor:'#fd5c64'}}>
                      <p>{property.rent_or_sale}</p>
                    </div>

                      ):(
                        <div className="rent_sale" >
                        <p>{property.rent_or_sale}</p>
                      </div>
                      )}
                  </div>
                  <div className="room_facility">
                        <div className="property_bed">
                        <IoBedOutline className='bed'/>
                        <p>{property.bed}</p>
                      </div>
                      <div className="property_bath">
                        <PiBathtub className='bath'/>
                        <p>{property.bathdub}</p>
                      </div>
                      <div className="property_sqft">
                        <SiKaufland className='sqft'/>
                        <p>{property.sqft} sqft</p>
                      </div>
        
                      </div>
        
                      
        
                  </div>
                </div>
        
        ))}

        {/* <div data-aos="fade-up" data-aos-delay="100" className="property_card">
          <div className="property_image">
          <img src={property1} alt="404" />
          <div className="property_align_content">
          <p ref={propertyAmountStrikeRef} className='property_amount_strike'>0</p>
          <p className='property_amount'>$300,000</p>
          </div>
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

        <div data-aos="fade-up" data-aos-delay="200" className="property_card">
          <div className="property_image">
          <img src={property2} alt="404" />
          <div className="property_align_content">
          <p ref={propertyAmountStrikeRef} className='property_amount_strike'>0</p>
          <p className='property_amount'>$300,000</p>
          </div>

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

        <div data-aos="fade-up" data-aos-delay="300" className="property_card">
          <div className="property_image">
          <img src={property3} alt="404" />
          <div className="property_align_content">
          <p ref={propertyAmountStrikeRef} className='property_amount_strike'>0</p>
          <p className='property_amount'>$300,000</p>
          </div>
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

        <div data-aos="fade-up" data-aos-delay="400" className="property_card">
          <div className="property_image">
          <img src={property4} alt="404" />
          <div className="property_align_content">
          <p ref={propertyAmountStrikeRef} className='property_amount_strike'>0</p>
          <p className='property_amount'>$300,000</p>
          </div>
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
        </div> */}
        

      </div>
      
  
    </div>
    </div>
    </div>
    </>
  )
}

export default OurProperties