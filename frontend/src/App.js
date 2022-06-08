import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}