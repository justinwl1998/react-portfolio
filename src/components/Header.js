import React, { useState } from 'react';
import Navigation from './Navigation';
// import '../styles/Header.css';

const styles = {
  h1Style: {
    display: 'inline-block',
  },
};

function Header() {
  return (
    <header className="header">
      <h1 style={styles.h1Style}>Justin Liu</h1>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              className='nav-link'
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className='nav-link'
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className='nav-link'
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              className='nav-link'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
