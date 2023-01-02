import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { Home, Blog, Fem } from './Containers';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fem" element={<Fem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
