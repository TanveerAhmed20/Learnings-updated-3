import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/header/Header";
import Players from "./components/players/Players";
import Home from "./components/home/Home";
import ViewPlayer from "./components/players/ViewPlayer";
import Parent from './components/Assignment/Assignment1/ClassBased'
import ValidateProp from "./components/Assignment/Assignment3.js/ValidateProps";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/players" element={<Players/>} />
            <Route path="/players/:id" element={<ViewPlayer/>} />
          </Routes>
        </div>
      </Router>
      // <Parent/>

      // <ValidateProp/>
    );
  }
}

export default App;
