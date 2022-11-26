import React from 'react';

const styles = {
  footerStyle: {
    backgroundColor: '#EAEDD0',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    margin: 0
  },
};

function Footer() {

  return (
    <footer style={styles.footerStyle} className="footer">
      <a href='https://github.com/justinwl1998'>
      <div className="link">
          <i className="devicon-github-original"></i>
      </div>
      </a>
      <a href='https://www.linkedin.com/in/justin-liu-9b01ba185/'>
      <div className="link">
        <i className="devicon-linkedin-plain"></i>
      </div>
      </a>
      <div className="link">
        <i className="devicon-twitter-original"></i>        
      </div>

  </footer>
  );
}

export default Footer;
