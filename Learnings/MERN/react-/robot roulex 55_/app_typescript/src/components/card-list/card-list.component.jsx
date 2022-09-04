import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  console.log("inside card list");
  const { monsters } = props;
  // we can also directly se as {monsters} instead of props
  return (
    <div className="card-list">
      {monsters.map((x,idx) => {
        // const {id,name,email } = monsters;
        return <Card key={idx} robo={x} />;
      })}
    </div>
  );
};

export default CardList;
