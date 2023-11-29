import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Search from './Pages/Search/Search';
import Settings from './Pages/Settings/Settings';
import Alerts from './Pages/Alerts/Alerts';
import Maps from './Pages/Maps/Maps';
import Home from './Pages/Home/Home';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return(
    <div className=' h-full md:h-[100vh]'>
      
      <Router>
        <Header  />
        <div className='flex flex-col md:flex-row items-center'>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Search/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Map" element={<Maps/>} />
            <Route path="/Settings" element={<Settings/>} />
            <Route path="/Alerts" element={<Alerts/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
    
  )
}

export default App
