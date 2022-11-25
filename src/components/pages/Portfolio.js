import React from 'react';
import Project from '../Project';

// todo: add projects object array to render
const projects = [
  {
    id: 1,
    name: 'TAP TAP REVOLUTION: QWERTY REQUIEM',
    github: 'https://github.com/justinwl1998/tap-tap-revolution-qr',
    link: 'https://secure-savannah-57632.herokuapp.com/',
    image: '',
  },
  {
    id: 2,
    name: 'DnD Character Folio',
    github: 'https://github.com/Spikeophant/dndCharFolio',
    link: 'https://spikeophant.github.io/dndCharFolio/',
    image: '',
  },
  {
    id: 3,
    name: 'Just Another Text Editor',
    github: 'https://github.com/justinwl1998/text-editor-app',
    link: 'https://floating-escarpment-10083.herokuapp.com/',
    image: '',
  },
  {
    id: 4,
    name: 'Tech Blog Clone',
    github: 'https://github.com/justinwl1998/tech-blog-clone',
    link: 'https://protected-bastion-78238.herokuapp.com/',
    image: '',
  },
  {
    id: 5,
    name: 'Note Taker',
    github: 'https://github.com/justinwl1998/note-taker',
    link: 'https://nameless-dusk-97199.herokuapp.com/',
    image: '',
  },
  {
    id: 6,
    name: 'Weather Dashboard',
    github: 'https://github.com/justinwl1998/weather-dashboard',
    link: 'https://justinwl1998.github.io/weather-dashboard/',
    image: '',
  },
];

const styles = {
  container: {
    padding: '3%'
  }
}

export default function Portfolio() {
    return (
      <div style={styles.container}>
        <h2>Portfolio Page</h2>
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