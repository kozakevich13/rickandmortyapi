import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = ({ res }) => {
  const { id, name, image, gender } = res;
  return (
    <>
      <Card key={id} className="col-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <Link to={'./' + id}>{name}</Link>
          </Card.Title>
          <Card.Text>{gender}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
