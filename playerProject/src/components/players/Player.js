import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import './Players.css'
import {deletePlayer} from '../../services'
import EditPlayer from "../edit-player/EditPlayer";
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
const buttons = (view,id,toggle) => {
  if (view) {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button  variant="secondary"onClick={toggle}>EDIT</Button>
        <Button variant="secondary" onClick ={()=>{if(window.confirm("Are you sure you want to delete? ")===true)deletePlayer(id).then(()=>{window.location ='/players'})}}>DELETE</Button>
      </ButtonGroup>
    );
  } else {
    return (
      <Button variant="danger">
        <Link to={`/players/${id}`}>VIEW</Link>
      </Button>
    );
  }
};
const Player = ({ player, view }) => {
  const {id, name, image, category, country} = player;
  const [modal,setModal]= useState(false);
 
  const toggle = () =>{
    setModal(!modal);
  }
 const toggleEditPlayerModal = ()=>{
    setModal(!modal);
    toggle();
 }
 
  return (
    <div>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Player No {id}</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{country}</Card.Text>
          {buttons(view,id,toggle)}
        </Card.Body>
      </Card>
      <Modal isOpen = {modal} toggle = {toggleEditPlayerModal}>
              <ModalHeader> EDIT PLAYER</ModalHeader>
              <ModalBody><EditPlayer id={id}/></ModalBody>
      </Modal>
    </div>
  );
};

export default Player;
