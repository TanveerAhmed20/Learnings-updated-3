import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { editPlayer, getPlayers2 } from "../../services";
import { useParams } from "react";
const PlayerCategories = [
  "select category",
  "batsman",
  "bowler",
  "all rounder",
  "wicket keeper",
];
const getPlayerCategories = PlayerCategories.map((cat, index) => {
  return <option key={index}>{cat}</option>;
});
class EditPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: "",
      country: "",
      category: "",
      image: "",
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.savePlayer = this.savePlayer.bind(this);
  }

  onHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  savePlayer() {
    getPlayers2(this.props.id).then((res) => {
      const player = {
        name: this.state.name === "" ? res.data.name : this.state.name,
        country:
          this.state.country === "" ? res.data.country : this.state.country,
        category:
          this.state.category === "" ? res.data.category : this.state.category,
        image: this.state.image === "" ? res.data.image : this.state.image,
      };
      editPlayer(this.state.id, player)
        .then(() => (window.location = "/players"))
        .catch((e) => console.log(e));
    });
  }

  componentDidMount() {
    // this.setState({id:this.props.match.params.id});
    console.log(this.state.id);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.savePlayer}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              onChange={this.onHandleChange}
              placeholder="enter name"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Input
              type="text"
              name="country"
              onChange={this.onHandleChange}
              placeholder="enter country"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Category</Label>
            <Input
              type="select"
              name="category"
              onChange={this.onHandleChange}
              placeholder="enter category"
            >
              {getPlayerCategories}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.onHandleChange}
              placeholder="enter Image URL"
            ></Input>
          </FormGroup>
          <Button type="submit">EDIT PLAYER</Button>
        </Form>
      </div>
    );
  }
}
export default EditPlayer;
