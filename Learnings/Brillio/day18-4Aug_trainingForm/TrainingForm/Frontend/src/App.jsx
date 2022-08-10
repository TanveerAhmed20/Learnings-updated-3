import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import AppNavbar from './components/header/Header';
import Trainings from './components/trainings/Trainings';
import ViewTraining from './components/viewTraining/ViewTraining';

function App() {

  return (
    <Router>
      <AppNavbar />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Trainings />} />
          <Route path="/Trainings" exact element={<Trainings />} />
          <Route path="/Trainings/:id" exact element={<Trainings />} />
          <Route path="/AddTraining" exact element={<Trainings />} />
          <Route path="/EditTraining/:id" exact element={<Trainings />} />
          <Route path="/ViewTraining/:id" exact element={<ViewTraining />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
