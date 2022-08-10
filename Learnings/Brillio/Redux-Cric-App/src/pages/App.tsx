import { Col, Container, Row } from "reactstrap";
import AddPlayer from "../components/add-player";
import ViewPlayers from "../components/view-players";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <AddPlayer />
          </Col>
          <Col>
            <ViewPlayers />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
