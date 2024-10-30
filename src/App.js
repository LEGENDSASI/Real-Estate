import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
