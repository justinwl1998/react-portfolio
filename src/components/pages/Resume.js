import React from 'react';

const styles = {
  container: {
    padding: '3%'
  }
}

export default function Resume() {
    return (
      <div style={styles.container}>
        <h2>Resume Page</h2>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>

        <p>Download my resume here, eventually.</p>

        <h3>Front-end proficiencies</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-end proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB</li>
        </ul>
      </div>
    );
  }