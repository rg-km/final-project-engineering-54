import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import ScrollPage from "./components/ScrollPage";

import Blogs from "./pages/blog/Blogs";
import ReadBlog from "./pages/blog/ReadBlog";

/* Admin */
import AdminSignin from "./pages/admin/auth/AdminSignin"
import AdminDash from "./pages/admin/dashboard/AdminDash"
import AdminCreateMentor from "./pages/admin/dashboard/AdminCreateMentor"

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

/* Mentor */
import MentorDash from "./pages/mentor/MentorDash"
import MentorForum from "./pages/mentor/MentorForum"
import MentorProfile from "./pages/mentor/MentorProfile"
import MentorQuestions from "./pages/mentor/MentorQuestions"

/* Student */
import Forum from "./pages/Forum";
import Mydash from "./pages/dashboard/Mydash";
import Profile from "./pages/dashboard/Profile";
import Question from "./pages/dashboard/Question";
import Questions from "./pages/dashboard/Questions";

import NotFound from "./pages/NotFound";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  id: null,
  email: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        email: null,
        id: null,
        token: null,
        role: null,
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
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slugCategory/:slug" element={<ReadBlog />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Student */}
          <Route path="/dashboard/my" element={<Mydash />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/questions" element={<Questions />} />
          <Route path="/question/create" element={<Question />} />
          <Route path="/question/:id" element={<Forum />} />

          {/* Mentor */}
          <Route path="/mentor/dashboard" element={<MentorDash />} />
          <Route path="/mentor/profile" element={<MentorProfile />} />
          <Route path="/mentor/questions" element={<MentorQuestions />} />
          <Route path="/answer/question/:id" element={<MentorForum />} />
          {/* <Route path="/question/create" element={<Question />} />
          <Route path="/question/:id" element={<Forum />} /> */}

          {/* Admin */}
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/dashboard" element={<AdminDash />} />
          <Route path="/admin/mentor/create" element={<AdminCreateMentor />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollPage>
    </AuthContext.Provider>
  );
}
