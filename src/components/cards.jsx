import React from 'react';
import Card from 'react-bootstrap/Card';
import '../stylesheets/rectangles/cards.scss'

const color = "#2e5985";
const BasicCard = ({ data }) => {
  return (
    <div>
          {data.map((card, index) => (
            <Card
              key={index}
              className="card"
              style={{ backgroundColor: color}}
            >
              <Card.Img variant="top" src={card.imageSrc} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
    </div>
  );
};

export default BasicCard;
