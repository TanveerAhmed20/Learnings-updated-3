import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
class CardList extends Component {
  render() {
    console.log("inside card list");
    // console.log(this.props.monsters[0].name);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((x) => {
          // const {id,name,email } = monsters;
          return <Card robo={x} />;
        })}
      </div>
    );
  }
}

export default CardList;
