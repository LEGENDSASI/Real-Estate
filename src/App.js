import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import AboutPage from './Components/AboutPage/AboutPage';
import PropertiesPage from './Components/PropertiesPage/PropertiesPage';
import AgentsPage from './Components/AgentsPage/AgentsPage';
import ContactPage from './Components/ContactPage/ContactPage';
import { useEffect } from 'react';
import AOS from 'aos'

function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      offset:100
    });
  })
  return (  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/properties' element={<PropertiesPage/>} />
      <Route path='/agents' element={<AgentsPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
