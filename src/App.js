import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./components/Header";
import LeftNav from './components/LeftNav';
import DevicePage from './pages/DevicePage';
import { HomePage } from './pages/HomePage';
import {useEffect, useState} from 'react';


function App() {
 


  return (
    <Router>
    <div className="container">
      <Header></Header>
      <main>
        <LeftNav ></LeftNav>
        
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/home" element={<HomePage></HomePage>}></Route>
            <Route path="/device/:org_id" element={<DevicePage ></DevicePage>}></Route>
          </Routes>
        
      </main>
    </div>
    </Router>
  );
}

export default App;
