import React from 'react';

const ColoredRectangles = () => {
  // Define an array of colors
  const colors = ["#3a72a9", "#2e5985", "#214160", "#14283c"];
  const title = ["Realidad Virtual y Aumentada", "Inteligencia Artificial", 
                    "Tecnología en la Educación"];


  return (
    <div className="colored-rectangles-container">
      {colors.map((colors, index) => (
        <div
          key={index}
          className="block-element"
          style={{ backgroundColor: colors}}
        >
          {title[index]}
        </div>
      ))}
    </div>
  );
};

export default ColoredRectangles;

