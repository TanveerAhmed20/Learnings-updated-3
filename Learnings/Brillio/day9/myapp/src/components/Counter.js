import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    
  }
  
  render() {

    let onButtonClick = (event)=>{
        this.setState({count : this.state.count+1});
    }

    return (
      <div>
        <h2> You clicked : {this.state.count} Times</h2>
        <button onClick = {onButtonClick} value ="clickme">INCREMENT</button>
      </div>
    );
  }
}
