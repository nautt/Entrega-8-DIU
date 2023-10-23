import React from 'react';
import Card from 'react-bootstrap/Card';

import placeholder from '../assets/placeholder.jpg'

const color = "#5a5a5a";
const BasicCard = ({ data }) => {
  return (
    <div style={{display:"flex", flexDirection:"row", overflow: "hidden"}}>
          {data.map((card, index) => (
            <Card
              key={index}
              className="card"
              style={{ backgroundColor: color}}
            >
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title className='card-title'>{card.name}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
    </div>
  );
};

export default BasicCard;
