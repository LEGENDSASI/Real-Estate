import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import AboutPage from './Components/AboutPage/AboutPage';

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<AboutPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
