import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import './Home.css';

const Example = (props) => {
  return (
    <Container fluid className="home-margin">
      <Jumbotron className="bg-danger border border-dark text-light">
        <h1 className="display-3">React Cric App !!!</h1>
        <blockquote className="blockquote">
        </blockquote>
        <hr className="my-2" />
        <p className="lead">This is a simple CRUD application for Creating, Reading, Updating and Deleting players</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Example;