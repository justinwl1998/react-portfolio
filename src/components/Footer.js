import React, { useState } from 'react';

const styles = {
  footerStyle: {
    backgroundColor: '#EAEDD0',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
  },
};

function Footer(props) {
  const {currentPage, setCurrentPage} = props;

  return (
    <footer style={styles.footerStyle} className="footer">
      <h3>Links eventually go here</h3>
    </footer>
  );
}

export default Footer;
