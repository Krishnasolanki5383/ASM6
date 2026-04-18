import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import FindDoctor from './pages/FindDoctor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
      </Routes>
    </Router>
  );
}

export default App;
