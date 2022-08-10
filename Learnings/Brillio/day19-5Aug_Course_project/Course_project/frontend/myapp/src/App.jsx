import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCourse from './components/AddCourse/Add';
import Home from './components/Home/Home'
import Courses from './components/Courses/Courses';
import ViewCourse from './components/ViewCourse/ViewCourse';
function App() {
  return (
    <Router>
    {/* <div className="App"> */}
      <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/Add" element={<AddCourse/>} />
        <Route exact path="/Courses" element={<Courses/>} />
        <Route exact path="/Courses/:id" element={<ViewCourse/>} />
      </Routes>
    {/* </div> */}
  </Router>
  )
}
export default App
