import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Game from './pages/Game';
import MathGame from './pages/Math';
import RushHour from './pages/RushHour';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/math" element={<MathGame />} />
        <Route path="/rushour" element={<RushHour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;