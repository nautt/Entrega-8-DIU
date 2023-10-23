import React from 'react';
import BasicCard from './cards.jsx';

import '../stylesheets/rectangles/cards.scss'

function CardCollection(props){
    const {data} = props;
    const cardsPerRow = 3;
    const cardContainers = [];
    for (let i = 0; i < data.length; i += cardsPerRow) {
    const cardSet = data.slice(i, i + cardsPerRow);

    console.log(cardSet)
    const container = (
      <div key={i} className="horizontal-card-container">
          <BasicCard data={cardSet} />
      </div>
    );

    cardContainers.push(container);
    }

    return (
    <div>
        {cardContainers}
    </div>
    );
};

export default CardCollection;



