import React from 'react';
import BasicCard from './cards.jsx';

import '../stylesheets/rectangles/cards.scss'

function RectangleCards(props){
  return (
    <div className="one-rectangle-container">
        <div
          className="one-block-element"
          style={{ backgroundColor: props.color}}
        >
          {props.title}
          <div className="horizontal-card-container">
            <BasicCard data={props.data}/>
          </div>
        </div>
    </div>
  );

};

export default RectangleCards;



