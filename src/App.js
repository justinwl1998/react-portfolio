import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
    const [currentPage, setCurrentPage] = useState(window.location.href.includes('#') ? window.location.href.substring(window.location.href.indexOf('#') + 1) : 'about');

    const renderPage = () => {
        console.log()
        if (currentPage.toLowerCase() === 'about') {
            return <About />;
        }
        if (currentPage.toLowerCase() === 'contact') {
            return <Contact />;
        }
        if (currentPage.toLowerCase() === 'portfolio') {
            return <Portfolio />;
        }
        if (currentPage.toLowerCase() === 'resume') {
            return <Resume />;
        }
    };

    return (
        <div className="siteContainer">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          
            <Header currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;