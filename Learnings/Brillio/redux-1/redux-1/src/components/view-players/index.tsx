import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Media,
  Table,
} from "reactstrap";
import { connect } from "react-redux";
import { Player } from "../../types";

interface ViewPlayersProps {
  players: {
    [id: string]: Player
  };
}

function ViewPlayers({ players }: ViewPlayersProps) {
  console.log(players);
  return (
    <Card>
      <CardHeader>
        <h4>View Players</h4>
      </CardHeader>
      <CardBody>
        <ListGroup>
          {/* get all keys from players object as an array */}
          {Object.keys(players).map((id) => (
            <ListGroupItem key={id}>
              <Media>
                <Media left href="#">
                  <Media
                    width="60px"
                    object
                    src={players[id].image}
                    alt="img"
                  />
                </Media>
                <Media className="ml-4" body>
                  <Media heading>{id}</Media>
                  <Table color="">
                    <tbody>
                      <tr>
                        <td>{players[id].name}</td>
                        <td>{players[id].type}</td>
                        <td>{players[id].country}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Media>
              </Media>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
}

// mapStateToProps receives current state from redux store
// from that state we retrieve only required values and pass them as props
const mapStateToProps = (state: any) => {
  return { players: state.players };
};

// connect function is a HOC which communicates with redux store.
// and wraps our ViewPlayers Component
// connect(mapStateToProps) returns a funtion.
// We pass our ViewPlayers Component as a parameter to this function
// That returns a Wrapped Component which contains our ViewPlayers Component
export default connect(mapStateToProps)(ViewPlayers);
