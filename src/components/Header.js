import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// import '../styles/Header.css';

const styles = {
  h1Style: {
    display: 'inline-block',
  },
};

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <header className="header">
      <h1 style={styles.h1Style}>Justin Liu</h1>
    </header>
  );
}

export default Header;
