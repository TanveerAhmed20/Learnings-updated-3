import { Component } from "react";
import { Button } from "reactstrap";

export default class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Put Text",
    };

    // need to bind function to this objetc otherwise it wont work , not editable mode
    // because of Virtual DOM we need to bind MyComponent obejetc to the function
    this.dieDieDie = this.dieDieDie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  dieDieDie() {
    alert("hello: " + this.state.user);
    this.setState({
      user: "did die die",
    });
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      user: event.target.value,
    });
  }
  // in order to fetch value from input ( or eventdata input) we have to implement a function that handles onChange event

  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <br />
        <Button
          style={{
            boxShadow: "0px 0px 5px 2px #fc0335",
            backgroundColor: "red",
            outline: "0",
            border: "none",
            margin: "10px",
          }}
          onClick={this.dieDieDie}
        >
          Don't click Me
        </Button>
      </div>
    );
  }
}
