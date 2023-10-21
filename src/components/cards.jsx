import React from 'react';
import Card from 'react-bootstrap/Card';

const BasicCard = ({ data }) => {
  return (
    <div>
      {data.map((card, index) => (
        <Card key={index} style={{ width: '18rem' }}>
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
