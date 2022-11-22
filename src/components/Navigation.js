import React, { useState } from 'react';

export default function Navigation() {
    return (
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
    );
}