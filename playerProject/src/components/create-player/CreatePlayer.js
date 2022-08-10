import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {createPlayer} from "../../services"
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
class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
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
    [event.target.name]  : event.target.value
    });
  }
  savePlayer() {

    const player = {
        id: this.state.id,
        name : this.state.name , 
        country : this.state.country,
        category : this.state.category,
        image : this.state.image
    }
    createPlayer(player)
    .then(()=>window.location="/players")
    .catch((e)=>console.log(e));
    
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.savePlayer}>
          <FormGroup>
            <Label>ID</Label>
            <Input
              type="number"
              name="id"
              onChange={this.onHandleChange}
              placeholder="enter id"
            ></Input>
          </FormGroup>
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
          <Button onClick={this.savePlayer}>ADD PLAYER</Button>
        </Form>
      </div>
    );
  }
}

export default CreatePlayer;
