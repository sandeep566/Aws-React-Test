import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Employess from './Employess';
import Pagenotfound from './Pagenotfound';
import React from 'react'


const App = () => {
  return (
    <div class="container mt-5" style={{backgroundColor:"black"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employess" element={<Employess />} />
        <Route path="*" element={<Pagenotfound />} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
