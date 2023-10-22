import React from 'react';
import Card from 'react-bootstrap/Card';

const color = "#2e5985";
const BasicCard = ({ data }) => {
  return (
    <div style={{display:"flex", flexDirection:"row", overflow: "hidden"}}>
          {data.map((card, index) => (
            <Card
              key={index}
              className="card"
              style={{ backgroundColor: color}}
            >
              <Card.Img variant="top" src={card.imageSrc} />
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
