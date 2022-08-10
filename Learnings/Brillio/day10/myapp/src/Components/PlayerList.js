// import { Component } from "react";

import { useState } from "react";
import Players from "./Players";
const Player = () => {
  const [playersList, addPlayer] = useState([]);
  const [name, setName] = useState("");

  const onclickHandler = () => {
    addPlayer([...playersList, name]);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <button onClick={onclickHandler}>Add </button>
      <Players players={playersList} />
    </div>
  );
};
export default Player;

// using class components

// export default class Players extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       playersList: [],
//     };
//     this.onclickHandler = this.onclickHandler.bind(this);
//   }
//   onclickHandler() {
//     this.setState({
//       playersList: [...this.state.playersList, this.state.name],
//     });
//     this.setState({ name: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={(event) => this.setState({ name: event.target.value })}
//           value={this.state.name}
//         />
//         <button onClick={this.onclickHandler}>Add </button>
//         <Players players={this.state.playersList} />
//       </div>
//     );
//   }
// }
