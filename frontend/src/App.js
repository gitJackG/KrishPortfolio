import React from 'react';
import './styles/_global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
        <div className='app-container'>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    </Router>
  );
}
