import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserForm from './components/Assignment/UserForm'
import AppNew from './components/HOC_v2/AppNew'
import UserForm2 from './components/Assignment/UserForm_v2'


class App extends Component {
  render() {
    return (
        <div className="App">
         {/* <UserForm/> */}
         <AppNew/>
         <UserForm2/>
        </div>
    );
  }
}

export default App;
