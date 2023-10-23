import React from 'react';
import CardCollection from './card_collector.jsx'
import '../stylesheets/rectangles/oneRectangle.scss'

function RectangleCards(props){

    return (
    <div className="one-rectangle-container">
      <div className="one-block-element" style={{ backgroundColor: props.color }}>
        {props.title}
        <CardCollection data={props.data}/>
      </div>
    </div>
    );
};

export default RectangleCards;



