import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ScrollPage from "./components/ScrollPage";

import Blogs from "./pages/blog/Blogs";
import ReadBlog from "./pages/blog/ReadBlog";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

import Terms from "./pages/terms/Terms";
import Abouts from "./pages/about/Abouts";

import Mydash from "./pages/dashboard/Mydash";
import Profile from "./pages/dashboard/Profile";
import Question from "./pages/dashboard/Question";
import Questions from "./pages/dashboard/Questions";
import Dashboard from "./pages/dashboard/Dashboard";

import NotFound from "./pages/NotFound";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  id: null,
  email: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        email: null,
        id: null,
        token: null
      }
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <ScrollPage>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slugCategory/:slug" element={<ReadBlog />} />
          <Route element={<Dashboard />}>
            <Route exact path="/dashboard" element={<Mydash />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/question" element={<Question />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/abouts" element={<Abouts />} />
        </Routes>
      </ScrollPage>
    </AuthContext.Provider>
  );
}
