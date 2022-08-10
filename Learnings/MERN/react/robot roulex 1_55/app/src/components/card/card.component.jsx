import { Component } from "react";

import "./card-component.css";

class Card extends Component {
  render() {
    let { id, name, email } = this.props.robo;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`monster ${id}`}
        />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
