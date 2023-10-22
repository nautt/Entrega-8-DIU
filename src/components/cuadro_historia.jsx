import React from 'react';

const OneRectangle1 = () => {
  const color = ["#3a72a9"];
  const text = ['Esta actividad se ha consolidado a lo largo del tiempo como una oportunidad en que los alumnos del Departamento de Informática de la Casa Central y del Campus Santiago de la Universidad Técnica Federico Santa María, muestran a la comunidad sus conocimientos, capacidad creativa, trabajo en equipo y emprendimiento.',
                'La idea central de esta iniciativa es potenciar la formación profesional de los estudiantes, a través de la fabricación de productos de software, que solucionen una problemática real de nuestra sociedad, y además, reafirmar la apuesta-país de desarrollo e innovación tecnológica, como así también fomentar la capacidad emprendedora en los jóvenes expositores.', 
                'La Feria de Software es la culminación de un proceso de meses de arduo trabajo que comienza cuando se forman equipos que conciben una idea de proyecto, definen metas, eligen a un líder o jefe de proyecto y desarrollan un producto bajo los conceptos de la Ingeniería de Software, lo que suele exigir el aprendizaje de nuevas herramientas, metodologías, técnicas de desarrollo y trabajo en equipo. Es una instancia educativa centrada en el “aprender-haciendo”.'
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
          {text[1]}<br /><br />
          {text[2]}

        </div>
      ))}
    </div>
  );
};

export default OneRectangle1;



