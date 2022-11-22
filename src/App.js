import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Header from './components/Header';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    return (
        <div className="siteContainer">
            <Header currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
            {renderPage()}
        </div>
    );
}

export default App;