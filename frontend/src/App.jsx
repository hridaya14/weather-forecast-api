import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Search from './Pages/Search/Search';
import Settings from './Pages/Settings/Settings';
import Alerts from './Pages/Alerts/Alerts';
import Maps from './Pages/Maps/Maps';
import Home from './Pages/Home/Home';
import { menuState } from './Atoms/location';

import { Loading } from './Pages/Loading';
import MobileNavbar from './Components/MobileNavbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  const open = useRecoilValue(menuState);
  return(
    <Suspense fallback={<Loading/>}>
    <SpeedInsights>
    <div className=' lg:h-[100vh] overflow-hidden '>
      <Router>
        <Header/>
        <div className='flex flex-col lg:flex-row items-center lg:h-[83vh]'>
          <Navbar/>
          {open? <MobileNavbar/>: <div></div>}
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
    </SpeedInsights>
    </Suspense>
    
  )
}

export default App
