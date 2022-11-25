import React from 'react';

// Todo: Add image of self to this

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  flexItemStyle: {
    margin: '5%'
  },
  container: {
    padding: '3%'
  }
}

export default function About() {
    return (
      <div style={styles.container}>
        <h2>About Me</h2>
        <div style={styles.containerStyle}>
          <img style={styles.flexItemStyle} src="https://via.placeholder.com/300"></img>
          <p style={styles.flexItemStyle}>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </div>
      </div>
    );
  }