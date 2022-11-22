import React, { useState } from 'react';
import Navigation from './Navigation';
// import '../styles/Header.css';

const styles = {
  h1Style: {
    display: 'inline-block',
  },
};

function Header(props) {
  const {currentPage, setCurrentPage} = props;

  return (
    <header className="header">
      <h1 style={styles.h1Style}>Justin Liu</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  );
}

export default Header;
