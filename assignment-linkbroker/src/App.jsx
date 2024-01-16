import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage1 from './components/LandingPage1';
import Card from './components/Card';
import Poppage from './components/PopImg';

function App() {
  return (
  <>
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage1 />} />
  <Route path="/card" element={<Card/>} />
   <Route path='/popimg' element={<Poppage/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
