import { Component } from "react";
import A from "./Components/A";
import FunCounter from "./Components/FunCounter";
import Demo from "./Components/Demo";
import Player from "./Components/PlayerList";
import {UserDetails,UserDetails1} from "./Components/UserDetails";
import Call from './Components/Call'
// import App from "./Components/Call";
import App1 from "./Components/Assignment/App1";
export default class Hello extends Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWilUnMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render called");
    return (
      <div className="container">
        <A> hello </A>;
        <FunCounter />
        <Demo />
        <Player />
        <UserDetails />
        <UserDetails1/>
        <Call/>
        <hr/>
        <App1/>

      </div>
    );
  }
}
