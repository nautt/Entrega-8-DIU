import React from 'react';

const OneRectangle2 = () => {
  // Define an array of colors
  const color = ["#3a72a9"];
  const text = [
                'La organización de la Feria de Software está conformada por alumnos, ayudantes y profesores del Departamento de Informática de la Universidad Técnica Federico Santa María del Campus Santiago y Casa Central, que en conjunto integran distintas áreas de trabajo para llevar a cabo el evento. El equipo de Profesores actualmente está formado por: Cecilia Reyes, Lioubov Dombrovskaia, Luis Hevia,Pedro Godoy Cristian Correa. En años anteriores también han participado los profesores Marcello Visconti, Hernán Astudillo, Pablo Cruz y Romina Torres.'
                ];


  return (
    <div className="one-rectangle-container">
      {color.map((color, index) => (
        <div
          key={index}
          className="one-block-element"
          style={{ backgroundColor: color}}
        >
          {text[0]}<br /><br />
          {text[1]}

        </div>
      ))}
    </div>
  );
};

export default OneRectangle2;
