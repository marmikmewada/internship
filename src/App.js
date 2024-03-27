import React from 'react';
import Home from './pages/Home'; // Import your pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Withdraw from './pages/Withdraw';
import Usdt from './pages/Usdt';
import Trx from './pages/Trx';
import Recharge from './pages/Recharge';
import Inr from './pages/Inr';
import Details from './pages/Details';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/usdt" element={<Usdt/>} />
        <Route path="/trx" element={<Trx/>} />
        <Route path="/recharge" element={<Recharge/>} />
        <Route path="/inr" element={<Inr/>} />
        <Route path="/details" element={<Details/>} />

        {/* Add routes for your remaining 5 pages here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
