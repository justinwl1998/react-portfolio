import React from 'react';
import Navigation from './Navigation';
// import '../styles/Header.css';

const styles = {
  headerStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  h1Style: {
    display: 'inline-block',
    paddingRight: '25%'
  },
};

function Header(props) {
  const {currentPage, setCurrentPage} = props;

  return (
    <header style={styles.headerStyle} className="header">
      <h1>Justin Liu</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  );
}

export default Header;
