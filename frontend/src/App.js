import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

import Mydash from "./pages/dashboard/Mydash";
import Question from "./pages/dashboard/Question";
import Profile from "./pages/dashboard/Profile";
import Questions from "./pages/dashboard/Questions";
import Dashboard from "./pages/dashboard/Dashboard";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Dashboard />}>
        <Route path="/dashboard" element={<Mydash />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/question" element={<Question />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
