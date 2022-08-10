import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCourse from "./components/AddCourse/Add";
import Home from "./components/Home/Home";

import Courses from "./components/Courses/Courses";
import ViewCourse from "./components/ViewCourse/ViewCourse";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<AddCourse />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Courses/:id" element={<ViewCourse />} /> 
        </Routes>
   </Router>);
}

export default App;
