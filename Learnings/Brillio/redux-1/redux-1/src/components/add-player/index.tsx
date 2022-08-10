import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { Player, PlayerActionDispatch } from "../../types";
import { addPlayer as addPlayerAction } from "../../store/actions/player.actions";
import { useState } from "react";
 
interface AddPlayerProps {
  addPlayerProp: (payload: Player) => void;
}
 
function AddPlayer({ addPlayerProp }: AddPlayerProps) {
  const [player, setPlayer] = useState<Player>({
    name: "",
    country: "",
    type: "",
    image: "",
  });
  const handleAddPlayer = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addPlayerProp(player);
  };
 
  const handleClear = (evt: React.FormEvent<HTMLFormElement>) => {
    setPlayer({
      name: "",
      country: "",
      type: "",
      image: "",
    });
  };
  const handleFormInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    switch (evt.target.id) {
      case "name":
        setPlayer({
          ...player,
          name: evt.target.value,
        });
        break;
 
      case "type":
        setPlayer({
          ...player,
          type: evt.target.value,
        });
        break;
 
      case "image":
        setPlayer({
          ...player,
          image: evt.target.value,
        });
        break;
 
      case "country":
        setPlayer({
          ...player,
          country: evt.target.value,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader>
        <h4>Add Player</h4>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleAddPlayer} onReset={handleClear}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" type="text" onChange={handleFormInput} />
          </FormGroup>
          <FormGroup>
            <Label for="type">Type</Label>
            <Input id="type" type="text" onChange={handleFormInput} />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input id="image" type="text" onChange={handleFormInput} />
          </FormGroup>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input id="country" type="select" onChange={handleFormInput}>
              <option value=""></option>
              <option value="IND">INDIA</option>
              <option value="AUS">AUSTRALIA</option>
              <option value="ENG">ENGLAND</option>
              <option value="WI">WEST INDIES</option>
              <option value="SL">SRI LANKA</option>
            </Input>
          </FormGroup>
          <div className="d-flex flex-row-reverse justify-content-between">
            <Button color="primary" type="submit">
              {" "}
              Add Player{" "}
            </Button>
            <Button color="danger" type="reset">
              {" "}
              Reset{" "}
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}
const mapDispatchToProps = (dispatch: PlayerActionDispatch) => {
  return {
       addPlayerProp: (player: Player) => dispatch(addPlayerAction(player)),
  };
};
 
const mapStateToProps = () => ({});
 
export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);