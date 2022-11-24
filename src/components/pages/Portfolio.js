import React from 'react';
import Project from '../Project';

// todo: add projects object array to render
const projects = [
  {
    id: 1,
    name: 'Placeholder1'
  },
  {
    id: 2,
    name: 'Placeholder2'
  },
];

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
        <Project projects={projects} />
      </div>
    );
  }