import React, {useEffect} from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';


function Header(props) {
  const navigate = useNavigate();

  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken')
    if(!accessToken){
      navigate('/login')
    }
  
  },[navigate])

  useEffect(() => {
    switch (props.page_link_index) {
      case 1:
        navigateToPage('about_link');
        break;
      case 2:
        navigateToPage('properties_link');
        break;
      case 3:
        navigateToPage('agents_link');
        break;
      case 5:
        navigateToPage('contact_link');
        break;
      default:
        navigateToPage('home_link');
    }
  }, [props.page_link_index]);
  

  function navigateToPage (linkID) {
    const link = document.getElementById(linkID)
    document.querySelectorAll('.navbar_link_active').forEach(activeLink =>{
      activeLink.classList.remove('navbar_link_active')
    })
    console.log(link)
    link.classList.add('navbar_link_active')
    // navigate(path)
  }

  

  function GoToLoginPage() {
    navigate('/login');
    localStorage.removeItem('accessToken')
  }



  function GoToHomePage () {
    navigate('/')
  }

  function GoToAboutPage () {
    navigate('/about')
  }

  function GoToPropertiesPage () {
    navigate('/properties')
  }

  function GoToAgentsPage () {
    navigate('/agents')
  }

  function GoToBlogPage () {
    navigate('/')
  } 

  function GoToContactPage () {
    navigate('/contact')
  }

  function OnMenuClick () {
    const phone_nav = document.getElementById('phone_nav_id');
    if(phone_nav.classList.contains('phone_nav')){
      phone_nav.classList.add('phone_nav_remove')
      phone_nav.classList.remove('phone_nav')
    }
    else{
      phone_nav.classList.remove('phone_nav_remove')
      phone_nav.classList.add('phone_nav')
    }
    phone_nav.style.display = 'block'
  }

  return (
    <>
    <header className='headerContent'>
    <div className="top_full_content">

    <div className="top_content">
    <i className="fa-solid fa-map"></i>
    <div className="top_text">
    <p><span>Free Call </span>+1 234 456 78910</p>
    <p className='lower_text'>Call Us Now 24/7 Customer Support</p>
    </div>
    </div>

    <div className="top_content">
    <i className="fa-solid fa-paper-plane"></i>
    <div className="top_text">
    <p>Location</p>
    <p className='lower_text'>Suite 721 New York NY 10016</p>
    </div>
    </div>

    <div className="top_content">
    <i className="fa-brands fa-connectdevelop"></i>
    <div className="top_text">
    <p><span>Connect </span>with us</p>
    <p className='lower_text' style={{fontSize:"10px"}}>FACEBOOK TWITTER DRIBBLE</p>
    </div>
    </div>

    </div>

    <nav className='navbar_text'>
      <div className="logo">
        <h2>Oakberry</h2>
        <p style={{textTransform:'uppercase',fontWeight:'bold'}}>Real Estate Agency</p>
      </div>
      <div className="navbar_links">
        <li id='home_link' onClick={GoToHomePage}>HOME</li>
        <li id='about_link' onClick={GoToAboutPage}>ABOUT</li>
        <li id='properties_link' onClick={GoToPropertiesPage}>PROPERTIES</li>
        <li id='agents_link' onClick={GoToAgentsPage}>AGENTS</li>
        <li id='blog_link' onClick={GoToBlogPage}>BLOG</li>
        <li id='contact_link' onClick={GoToContactPage}>CONTACT</li>
      </div>

      <div className='submit_property'>
        <button className='submit_pry_btn' onClick={GoToLoginPage}>LOGOUT</button>
        <p className='MenuBtn' onClick={OnMenuClick}><i className="fa-solid fa-bars"></i>&nbsp;MENU</p>
      </div>
    </nav>
    <div id="phone_nav_id" className="phone_nav_remove">
    <div className="phone_navbar_links">
        <li id='home_link_phone' onClick={GoToHomePage}>HOME</li>
        <li id='about_link_phone' onClick={GoToAboutPage}>ABOUT</li>
        <li id='properties_link_phone' onClick={GoToPropertiesPage}>PROPERTIES</li>
        <li id='agents_link_phone' onClick={GoToAgentsPage}>AGENTS</li>
        <li id='blog_link_phone' onClick={GoToBlogPage}>BLOG</li>
        <li id='contact_link_phone' onClick={GoToContactPage}>CONTACT</li>
      </div>
      <button className='phone_submit_pry_btn' onClick={GoToLoginPage}>LOGOUT</button>
    </div>
    </header>
    </>
  )
}

export default Header
