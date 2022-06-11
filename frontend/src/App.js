import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}