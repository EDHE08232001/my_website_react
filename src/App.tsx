import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home";
import Work from "@/pages/Work";

const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 font-sans">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </div>
);

export default App
