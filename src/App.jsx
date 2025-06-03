import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Description from './pages/Description';
import Research from './pages/Research';
import FinalProduct from './pages/FinalProduct';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/research" element={<Research />} />
        <Route path="/final-product" element={<FinalProduct />} />
      </Routes>
    </div>
  )
}

export default App
