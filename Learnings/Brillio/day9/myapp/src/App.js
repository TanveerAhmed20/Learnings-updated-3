import "./App.css";
import User from "./components/ClassUser";
import Welcome from "./components/Welcome";
import PlayersList from "./components/PlayersList";
import A from './components/A'
import Counter from "./components/Counter";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Button } from "reactstrap";

function App() {
  const userDetails = {
    empId: 130868,
    name: "Tanveer Ahmed",
    city: "Assam",
    technology: "MERN",
  };
  return (
    <div>
      <Welcome name="Tanveer" />
      <User
        name="Tanveer Ahmed"
        city="Bengaluru"
        technology="MERN"
        details_object={userDetails}
      />
      <PlayersList />
      <A/>
      <Counter/>
      <Card
  style={{
    width: '18rem',
    border: '1px solid black',
    margin:'10px',
    padding : '10px'
  }}
>
  <img
    alt="Card image"
    src="https://picsum.photos/300/200"
    style = {{
      
    }}
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
    </div>
  );
}

export default App;
