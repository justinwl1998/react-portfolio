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
          {/* I really couldn't be bothered to take a photo of myself. */}
          <img style={styles.flexItemStyle} src="https://pbs.twimg.com/profile_images/1567595323660320774/Ww5_0yWK_400x400.png"></img>
          <p style={styles.flexItemStyle}>
            Justin Liu does occasional projects with Javascript or even something artistic. If he's not having an art block at the moment.
          </p>
        </div>
      </div>
    );
  }